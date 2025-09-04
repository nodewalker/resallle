import { Routes } from "@/utils/const";
import { BlogCard } from "./BlogCard";

export const Blog = () => {
  return (
    <div className="container mt-[30px] !py-10">
      <div className="font-normal text-[30px] leading-[38px] tracking-[-1px] mb-[30px]">
        {"Из блога"}
      </div>
      <BlogCard
        img={"/blog1.png"}
        title={"Как сочетать свой повседневный наряд"}
        text={
          "Возможно, вам не нужно покупать новую одежду, чтобы каждый день выглядеть красиво, стильно и свежо. Возможно, все, что вам нужно, - это комбинировать свои коллекции одежды. Главное - сочетать."
        }
        // TODO: POST ID
        href={`${Routes.blog}/post-id`}
      />
    </div>
  );
};
