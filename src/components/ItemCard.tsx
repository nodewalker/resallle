import { Product } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";

export const ItemCard = ({
  product,
}: {
  product: Product;
}): React.ReactElement => {
  return (
    <Link href={`/p/${product._uuid}`} className="w-[295px] h-[410px]">
      <div className="w-[295px] h-[300px] relative rounded-3xl overflow-hidden">
        <Image
          src={`https://fakestoreapi.ru/files/products/${product.images[0]._uuid}`}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="py-[10px] w-[295px] flex flex-col justify-between">
        <div className="font-medium text-[24px] leading-[32px] tracking-[-1px] text-[#121212] whitespace-nowrap overflow-x-hidden">
          {product.name}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {Array(Math.floor(product.rating))
              .fill(0)
              .map((el, i) => {
                return (
                  <Image
                    key={i}
                    src={"/full_star.png"}
                    alt={"start"}
                    width={0}
                    height={0}
                    className="w-[17px] h-[17px]"
                  />
                );
              })}
            {product.rating % 1 ? (
              <Image
                src={"/half_star.png"}
                alt={"start"}
                width={0}
                height={0}
                className="w-[9px] h-[17px]"
              />
            ) : null}
          </div>
          <div className="font-normal text-[16px] leading-[24px] tracking-normal opacity-[90%]">{`${product.rating}/5`}</div>
        </div>
        <div className="font-normal text-[20px] leading-[28px] tracking-[-1px] text-[#121212]">{`₽ ${product.price}`}</div>
      </div>
    </Link>
  );
};
