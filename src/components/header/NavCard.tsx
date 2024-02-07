import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
interface NavCardProps {
  image: string;
  subtitle: string;
  title: string;
}

export function NavCard({ image, subtitle, title }: NavCardProps) {
  return (
    <Card className="">
      <div className="flex flex-row">
        <CardContent className=" bg-purple-200">
          <Image className="" src={image} alt={subtitle} width={100} height={100} />
        </CardContent>
        <CardContent>
          <h5 className="text-base">{title}</h5>
          <p className="text-xs">{subtitle}</p>
        </CardContent>
      </div>
    </Card>
  );
}
