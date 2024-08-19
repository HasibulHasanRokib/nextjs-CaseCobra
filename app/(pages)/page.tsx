import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Image1 from "@/public/snake-1.png";
import Image2 from "@/public/your-image.png";
import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pt-32 md:grid md:grid-cols-3 md:gap-x-0 md:pt-24">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="absolute -top-20 left-0 hidden w-28 lg:block">
                <Image src={Image1} alt="image" className="w-full" />
              </div>
              <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg text-muted-foreground md:text-wrap lg:pr-10 lg:text-left">
                Capture your favorite memories with your own,
                <span className="px-2 font-semibold text-gray-800">
                  one-of-one
                </span>
                phone case. CaseCobra allows you to protect your memories, not
                just your phone.
              </p>

              <ul className="fle item-center mt-8 flex-col space-y-2 text-left font-medium sm:items-start">
                <div className="space-y-2">
                  <li className="item-center flex gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High-quality, durable material
                  </li>
                </div>
                <div className="space-y-2">
                  <li className="item-center flex gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />5 year
                    print guarantee
                  </li>
                </div>
                <div className="space-y-2">
                  <li className="item-center flex gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern iphone model supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <Image
                    src={"/users/user-1.png"}
                    alt="user"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-2.png"}
                    alt="user"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-3.png"}
                    alt="user"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-4.jpg"}
                    alt="user"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-5.jpg"}
                    alt="user"
                    width={40}
                    height={40}
                    className="inline-block rounded-full object-cover ring-2 ring-slate-100"
                  />
                </div>
                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">1,250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-32 flex h-fit w-full justify-center px-7 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <Image
                src={Image2}
                alt="line"
                className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
              />
              <Image
                src="/line.png"
                alt="line"
                width={80}
                height={80}
                className="absolute -bottom-6 -left-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/3.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
