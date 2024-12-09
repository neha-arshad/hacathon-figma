import Image from "next/image";
import Navbar from "./Component/Navbar";
import type { AppProps } from "next/app";
import TopHeader from "./Component/TopHeader";
import MiddleHeader from "./Component/MiddleHeader";
import Header from "./Component/Header";
import CompanyLogo from "./Component/CompanyLogo";
import FeaturedProduct from "./Component/FeaturedProduct";
import TopCategories from "./Component/TopCategories";
import HotCategories from "./Component/HotCategories";
import Products from "./Component/poducts";
import Footer from "./Component/Footer";


export default function Home() {
  return (
		<>
		
		<Header />
		<CompanyLogo />
		<FeaturedProduct />
		<TopCategories />
		<HotCategories />
		<Products />
		
		
		</>
     );
}
