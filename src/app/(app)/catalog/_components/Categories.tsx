"use client";

import { QueryType } from "@/utils/type";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { Dispatch, SetStateAction, useState } from "react";

type Category = {
  _uuid?: string;
  name?: string;
  children?: Category[];
  hasChildren?: boolean;
  hasProduct?: boolean;
};

const CategoryItem: React.FC<{
  category: Category;
  handleQuery: (query: QueryType[]) => void;
  cid: string | null;
  setCid: Dispatch<SetStateAction<string | null>>;
  parentCid: string[];
}> = ({ category, handleQuery, cid, setCid, parentCid }) => {
  const [isOpen, setOpen] = useState<boolean>(
    parentCid.includes(category._uuid as string) ? true : false
  );

  if (!category._uuid || !category.name) return null;

  return (
    <motion.li
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center">
        <span
          className={`cursor-pointer ${
            category._uuid === cid ? "font-bold" : ""
          }`}
          onClick={() => {
            setCid(category._uuid as string);
            handleQuery([{ key: "cid", value: category._uuid as string }]);
            if (category.hasChildren) setOpen(true);
          }}
        >
          {category.name}
        </span>
        {category.hasChildren && (
          <FontAwesomeIcon
            icon={faAngleRight}
            size="sm"
            className={`cursor-pointer`}
            onClick={() => setOpen(!isOpen)}
          />
        )}
      </div>
      {isOpen && category.hasChildren && category.children?.length && (
        <ul style={{ paddingLeft: 10 }}>
          {category.children.map((child) => (
            <CategoryItem
              key={child._uuid}
              category={child}
              handleQuery={handleQuery}
              cid={cid}
              setCid={setCid}
              parentCid={parentCid}
            />
          ))}
        </ul>
      )}
      {category.hasProduct && <div>product</div>}
    </motion.li>
  );
};

export const CategoryTree: React.FC<{
  data: Category[];
  handleQuery: (query: QueryType[]) => void;
  cid: string | null;
  setCid: Dispatch<SetStateAction<string | null>>;
}> = ({ data, handleQuery, cid, setCid }) => {
  let a: [string[], boolean] = [[], false];
  if (cid) a = parentOfCid(data, cid);
  return (
    <motion.ul className="text-[16px] text-black/60">
      {data.map((category) => (
        <CategoryItem
          key={category._uuid}
          category={category}
          handleQuery={handleQuery}
          cid={cid}
          setCid={setCid}
          parentCid={a[0]}
        />
      ))}
    </motion.ul>
  );
};

const parentOfCid = (data: Category[], cid: string): [string[], boolean] => {
  const a: string[] = [];
  data.forEach((el: Category) => {
    if (el._uuid === cid) a.push(el._uuid);
    if (el.hasChildren && el.children?.length && el.children.length > 0) {
      const b: [string[], boolean] = parentOfCid(el.children, cid);
      a.push(...b[0]);
      if (b[1]) a.push(el._uuid as string);
      return [a, b[1]];
    }
  });
  return [a, a.length ? true : false];
};
