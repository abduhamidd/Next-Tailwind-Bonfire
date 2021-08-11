import Image from 'next/image';
import Pink from '../../public/assets/pink.svg';
import TransparentPink from '../../public/assets/transparent-pink.svg';
import Blue from '../../public/assets/blue.svg';

function Gallery() {
  return (
    <>
      <section className="">
        <div className="pt-24 pl-12">
          <div className="pb-12">
            <p className="pl-2 uppercase">Designed just for you</p>
            <h1 className="text-4xl lg:text-6xl md:text-5xl">
              Customized Selling <br /> Experience
            </h1>
          </div>

          <div className="grid grid-cols-2 -ml-4">
            <div className="pr-6">
              <Image src="/assets/KristinaCol.jpg" width={500} height={750} />
            </div>
            <div>
              <div>
                <p className="w-2/4 pb-10 pl-6">
                  Our in-house design team will work with you to create a custom
                  store that seamlessly represents your brand.
                </p>
              </div>
              <div className="">
                <Image src="/assets/TheJpg.jpg" width={500} height={750} />
              </div>
            </div>
          </div>
          <div className="grid justify-center grid-flow-col grid-cols-3 gap-12 pt-20 pr-10 pb-28 lg:grid-cols-4">
            <div>
              <span>
                <Pink />
              </span>
              <div>
                <h1 className="pt-2 pb-4 text-xl">
                  Free Marketing <br /> samples
                </h1>
                <p>
                  We’ll send you free samples of your merch to use in your
                  marketing materials.
                </p>
              </div>
            </div>
            <div>
              <span>
                <Blue />
              </span>
              <div>
                <h1 className="pt-2 pb-4 text-xl">
                  Dedicated account <br /> management
                </h1>
                <p>
                  1-on-1 support to help you plan and execute your product
                  launches.
                </p>
              </div>
            </div>
            <div>
              <span>
                <TransparentPink />
              </span>
              <div>
                <h1 className="pt-2 pb-4 text-xl">
                  Evergreen <br />
                  campaingns
                </h1>
                <p>
                  Decide which campaigns are always active so you never miss a
                  sale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
