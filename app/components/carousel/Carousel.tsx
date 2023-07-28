import AboutQuality from "./AboutQuality";

interface ICarousel {
  title: string;
  content: string;
}

export default function Carousel({ carousel }: { carousel: ICarousel[] }) {
  return (
    <div>
      <AboutQuality carousel={carousel} />
    </div>
  );
}
