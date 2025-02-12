import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen"> 
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image 
            src="/logo.png"
            alt="logo"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-center text-sm justify-between text-gray-500 mt-20">
            <p className='justify-items-end '>Doctor Connect </p>
            <Link href="/?admin=true" className="text-sm font-medium text-green-500">
              Admin Panel
            </Link>
          </div>
        </div>
      </section>
      <Image
        src='/assets/images/onboarding-img.png'
        height={1000}
        width={1000}
        className="side-img mx-w[50%]"
        alt="onboarding"
      />
    </div>
  );
}