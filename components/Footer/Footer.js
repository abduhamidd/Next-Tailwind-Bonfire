import Image from 'next/image';

import ButtonPrimary from '../misc/ButtonPrimary';
import Bonfire from '../../public/assets/bonfire-logo.svg';
import Facebook from '../../public/assets/facebook.svg';
import Instagram from '../../public/assets/instagram.svg';
import Pinterest from '../../public/assets/pinterest.svg';
import Twitter from '../../public/assets/Twitter.svg';
import Mountain from '../../public/assets/Mountain.svg';
import Button from '../../public/assets/button.svg';
function Footer() {
  return (
    <footer className="relative h-full bg-grey-400">
      <div className="pl-20 pr-20">
        <div className="grid grid-cols-2 pt-20 ">
          <div className=" top-28">
            <h1 className="text-lg text-white lg:text-5xl">
              Join Bonfire X to take <br /> your custom merch to <br /> the next
              level
            </h1>
            <div className="pt-8">
              <ButtonPrimary>Unlock Access</ButtonPrimary>
            </div>
          </div>
          <div className="">
            <Image src="/assets/Chair.jpg" width={530} height={360} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 pt-24 pb-16 lg:grid-cols-5 md:grid-cols-5">
          <div>
            <div>
              <span>
                <Bonfire />
              </span>
              <div className="mt-8">
                <h1 className="text-grey-300">
                  Where the world goes for <br /> premium custom shirts
                </h1>
              </div>
              <div className="text-white pt-44">
                <div className="">@2021 Bonfire.com</div>
                <div className="">
                  <span className>DMCA</span>
                  <span>Trademark Takedown</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-grey-300">Using Bonfire</h1>
            </div>
            <div className="pt-6 text-white">
              <p>Sell Shirts online</p>
              <p>Start a fundraiser</p>
              <p>Order custom shirts</p>
              <p>Youtube creators</p>
              <p>Online stories</p>
              <p>Log In</p>
              <p>Track my order</p>
            </div>
            <div className="pt-20">
              <ButtonPrimary bg border>
                Start a Campaign
              </ButtonPrimary>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-grey-300">Resources</h1>
            </div>
            <div className="pt-6 text-white">
              <p>Help center</p>
              <p>Design templates</p>
              <p>Request a custom design</p>
              <p>Product catalog</p>
              <p>Pricing calculator</p>
              <p>Blog</p>
              <p>Stories</p>
            </div>
            <div className="pt-8">
              <Button />
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-grey-300">Company</h1>
            </div>
            <div className="pt-6 text-white">
              <p>About</p>
              <p>Careers</p>
              <p>Reviews</p>
              <p>Contact</p>
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>
          <div>
            <span>
              <h1 className="text-grey-300">FOLLOW US</h1>
            </span>
            <div className="grid grid-flow-col pt-6 cursor-pointer">
              <span>
                <Facebook />
              </span>
              <span>
                <Instagram />
              </span>
              <span>
                <Pinterest />
              </span>
              <span>
                <Twitter />
              </span>
            </div>
            <div className="pt-48">
              <Mountain />
              <div className="text-white">
                <p className="pt-2 text-lg">Based in Richmond,VA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
