import Logo from '../../public/assets/bonfire.svg';
import ButtonPrimary from '../misc/ButtonPrimary';
import Image from 'next/image';
import Phone from '../../public/assets/Frame.svg';
import styles from './Header.module.scss';
import {useState} from 'react';
function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className="relative z-10 h-full pl-6 lg:pr-8 lg:pl-12 md:items-center bg-grey-500 md:grid lg:block md:pr-4 md:pl-10">
      <header className="">
        <nav className="grid items-center grid-flow-col grid-cols-1 py-2 mx-auto lg:grid-cols-13 sm:py-4 md:py-2 lg:py-2 md:grid-cols-2">
          <div className="hidden lg:flex md:flex sm:flex">
            <Logo className="h-6 w-30" />
          </div>
          <ul className="items-center hidden grid-flow-col col-start-9 col-end-12 lg:grid ">
            <li className="mr-8 cursor-pointer md:mr-6">
              <a className="text-white">Sell Online</a>
            </li>
            <li className="mr-8 cursor-pointer md:mr-6">
              <a className="text-white ">Fundraise</a>
            </li>
            <li className="mr-8 cursor-pointer md:mr-6">
              <a className="text-white ">Customize</a>
            </li>
            <li className="mr-8 cursor-pointer md:mr-6">
              <a className="text-white">Explore</a>
            </li>
          </ul>
          <div className="hidden col-start-12 mr-6 md:pl-80 lg:pl-0 lg:block">
            <ButtonPrimary>Log In</ButtonPrimary>
          </div>
          <div className={'flex justify-end mr-8 lg:hidden'}>
            <ButtonPrimary onClick={handleOpen}>Menu</ButtonPrimary>
            <div>
              <div className=""></div>
            </div>
          </div>
        </nav>
      </header>
      <section className="">
        <div className="">
          <div className="grid items-center justify-center py-16 lg:w-8/12 sm:w-auto md:items-baseline lg:items-baseline md:justify-start lg:justify-start">
            <h1 className={styles.bg}>
              Take your <br /> merch to the <br /> next level
            </h1>
          </div>
          <div className="grid items-center justify-center grid-flow-col gap-2 mr-6 lg:grid-cols-5 sm:grid-cols-4 md:grid-cols-4 lg:mr-0 md:mr-0">
            <span>
              <Image
                src="/assets/img.jpg"
                width={180}
                height={320}
                className="object-cover rounded-2xl "
              />
            </span>
            <span className="lg:pt-8 sm:pt-0">
              <Image
                src="/assets/img-2.jpg"
                width={180}
                height={320}
                className="object-cover w-auto h-auto col-start-2 col-end-3 row-start-2 row-end-3 rounded-2xl"
              />
            </span>
            <span className="lg:pt-20 sm:pt-0">
              <Image
                src="/assets/img-3.jpg"
                width={180}
                height={320}
                className="object-cover rounded-2xl"
              />
            </span>
            <span className="hidden lg:pt-8 sm:pt-0 lg:block">
              <Image
                src="/assets/img-4.jpg"
                width={180}
                height={320}
                className="object-cover w-auto h-auto row-start-2 rounded-2xl"
              />
            </span>
            <span className=" rounded-2xl">
              <Image
                src="/assets/img-5.jpg"
                width={180}
                height={320}
                className="object-cover rounded-2xl"
              />
            </span>
          </div>
        </div>
        <div className="grid w-auto pt-20 mr-10 text-center ">
          <h3 className={styles.h3}>
            Introducing Bonfire X—the exclusive merch <br /> concierge service
            for the world’s top creators.
          </h3>
          <span className="grid items-center justify-center py-12">
            <ButtonPrimary>Unlock Access</ButtonPrimary>
          </span>
        </div>

        <div className="hidden lg:grid ">
          <span className="py-8 lg:pl-20 sm:pl-16">
            <Phone className="z-50" />
          </span>
          <span className="flex justify-end py-12 pr-24">
            <Image
              src="/assets/phone-dark.jpg"
              height={300}
              width={600}
              className="object-cover rounded-2xl"
            />
          </span>
        </div>
      </section>
    </div>
  );
}

export default Header;
