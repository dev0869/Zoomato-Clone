import { CategoryProps } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface category {
  data: CategoryProps[];
}
const Categories = ({ data }: category) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full h-full p-2 max-w-screen"
    >
      <CarouselContent>
        {data?.reverse().map((ele, index) => (
          <CarouselItem
            key={index}
            className="md:basis-[30%] px-4 gap-4 space-x-9 lg:basis-[20%]"
          >
            <div className="flex flex-col gap-2 items-center">
              <div className="rounded-full overflow-hidden w-[180px]  border-2 ">
                <img src={ele.photoUrl} alt="image" />
              </div>
              <p className="text-xl">{ele.categoryName}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Categories;
