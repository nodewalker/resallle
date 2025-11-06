import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductFilterPanel = ({
  params,
}: {
  params: URLSearchParams;
}): React.ReactElement => {
  const keys: [string, string][] = Array.from(params.entries());

  return (
    <div className="w-full overflow-auto flex items-center gap-4">
      {/* TODO: Sort by && method */}
      {/* {keys.map((el) => {
        if (!["p", "l"].includes(el[0]))
          return <ProductFilterItem key={el[0]} details={el} />;
      })} */}
    </div>
  );
};

// const ProductFilterItem = ({
//   details,
// }: {
//   details: [string, string];
// }): React.ReactElement => {
//   return (
//     <div className="px-2 py-1 bg-black/10 rounded-2xl">
//       <span className="">{details[0]}</span>
//       <span className="">{details[1]}</span>
//       <FontAwesomeIcon
//         icon={faXmark}
//         size="sm"
//         className={`cursor-pointer ml-2`}
//       />
//     </div>
//   );
// };
