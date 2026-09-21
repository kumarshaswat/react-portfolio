import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  /** extra classes on the media itself, e.g. "object-center" to change which
      part of a tall image the card crops to */
  imageClassName?: string;
  target?: string;
  rel?: string;
}

export default function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  imageClassName,
  target,
  rel,
}: Props) {
  return (
    <Card
      className={
        "group relative flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:border-[#7374be]/60 hover:shadow-lg dark:hover:border-[#9394f1]/60 motion-safe:hover:-translate-y-1"
      }
    >
      <div className={cn("block", className)}>
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className={cn(
              "h-40 w-full overflow-hidden object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]",
              imageClassName,
            )}
          />
        )}
      </div>
      {/* covers the whole card so anywhere but the footer links opens the
          project; the footer badges sit above it */}
      <Link
        href={href || "#"}
        aria-label={title}
        className="absolute inset-0 z-10 cursor-pointer"
        target={target}
        rel={rel}
      />
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="relative z-20 flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
