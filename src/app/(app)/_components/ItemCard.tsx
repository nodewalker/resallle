import Image from "next/image";
import Link from "next/link";

export const ItemCard = ({
  href,
  image,
  name,
  rating,
  price,
  isSelected,
}: {
  href: string;
  image: string; // URL
  name: string;
  rating: number;
  price: number;
  isSelected?: boolean;
}): React.ReactElement => {
  return (
    <Link href={href} className="w-[310px] h-[450px]">
      <div className="w-[310px] h-[350px] relative rounded-3xl overflow-hidden">
        <Image
          src={image}
          alt={"card image"}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            position: "absolute",
            width: "100%",
            height: "auto",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* TODO: ON CLICK IS SELECTED */}
        <Image
          src={isSelected ? "/selected.png" : "/unselected.png"}
          alt={"selected"}
          width={40}
          height={40}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: "5",
          }}
        />
      </div>
      <div className="mt-[10px] w-[310px] h-[90px] flex flex-col justify-between">
        <div className="font-medium text-[24px] leading-[32px] tracking-[-1px] text-[#121212]">
          {name}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {/* TODO: array: [ 'full', 'full', 'full', 'half' ] -> src={`${arr[i]}_start.png`} */}
            {/* STYLE FOR HALF START??? */}
            {Array(Math.floor(rating))
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
            {rating % 1 ? (
              <Image
                src={"/half_star.png"}
                alt={"start"}
                width={0}
                height={0}
                className="w-[9px] h-[17px]"
              />
            ) : null}
          </div>
          <div className="font-normal text-[16px] leading-[24px] tracking-normal opacity-[90%]">{`${rating}/5`}</div>
        </div>
        <div className="font-normal text-[20px] leading-[28px] tracking-[-1px] opacity-[80%]">{`₽ ${price}`}</div>
      </div>
    </Link>
  );
};
