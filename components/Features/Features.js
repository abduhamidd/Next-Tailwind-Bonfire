import Brooklyne from '../../public/assets/Brooklyne.svg';
import FoodRanger from '../../public/assets/Food-ranger.svg';
import Kristina from '../../public/assets/Kristina.svg';
import The from '../../public/assets/The.svg';
import styles from './Features.module.scss';
import Image from 'next/image';
import Col1 from '../../public/assets/col-1.svg';
import Col2 from '../../public/assets/col-2.svg';

function Features() {
  return (
    <>
      <section>
        <div className="text-center bg-white h-44 ">
          <div>
            <h3 className="mt-12 tracking-widest uppercase">
              Trusted by top creators
            </h3>
          </div>
          <div className="grid grid-cols-2 mt-4 mb-4 lg:mt-8 justify-items-center lg:grid-flow-col md:grid-flow-col lg:grid-cols-4 md:grid-cols-4 md:mb-0 lg:mb-0">
            <span>
              <Brooklyne />
            </span>
            <span>
              <The />
            </span>
            <span>
              <FoodRanger />
            </span>
            <span>
              <Kristina />
            </span>
          </div>
        </div>
        <div className={styles.container}>
          <div className="block grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-1">
            <div className="pt-24 pl-12 pr-8 md:pr-0 lg:pr-0">
              <Image src="/assets/girl.jpg" height={500} width={740} />
            </div>
            <div className="mt-8 ml-10 lg:absolute top-28 lg:left-2/4 md:mt-32">
              <p className="lg:text-lg">Lock in the extra profits</p>
              <h2 className="text-3xl font-semibold md:text-2xl">
                Custom <br /> Revenue Splits
              </h2>
              <h4 className=" lg:text-xl md:text-sm">
                Bonfire X members get exclusive access to our <br />{' '}
                straightforward boosted revenue sharing program <br /> that is
                individually customized for each creator.
              </h4>
            </div>
          </div>
        </div>

        <div className="h-full py-28 bg-grey-500">
          <div className="grid grid-cols-2 gap-4 justify-items-center lg:grid-cols-3 md:grid-cols-2">
            <div>
              <Col1 />
            </div>
            <div className="grid items-center text-center">
              <p className="text-xs text-white uppercase">
                more than just t-shirts
              </p>
              <h1 className="text-3xl leading-snug text-white lg:text-6xl md:text-6xl">
                Unlock <br /> Exclusive <br />
                Products
              </h1>
              <span className="mr-10 md:mr-10 lg:mr-0">
                <h3 className="text-gray-300 ">
                  With Bonfire X, you’ll unlock access to premium products from
                  top merchandising brands. Your custom merch can be tailored to
                  your exact needs.
                </h3>
              </span>
            </div>
            <div className="hidden lg:block">
              <Col2 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
