import React from 'react'
import ApartmentImageCard from './ApartmentImageCard'
import { Link } from 'react-router-dom'

function Apartments() {
  return (
    <div className="w-[100%] flex-col justify-start items-center gap-10 flex">
        <div className='ml-10 md:m-0'><span className="text-zinc-900 text-5xl font-semibold font-['Figtree'] leading-10">Explore </span><span className="text-[#7FDBCA] text-5xl font-semibold font-['Figtree'] leading-10">Apartments</span></div>
        <div className="w-[100%] flex flex-col md:flex-row gap-5 px-10">
            <ApartmentImageCard imgUrl='https://s3-alpha-sig.figma.com/img/eb70/5303/9e120f9f2feb4937d10aa881474e1151?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdY6dYGsuVxFJzbDh5SsdVv-Q83-By30zqnNarxuGR9ZQd-qnLHqf2QnMhs3CTjhRAV61slqYPckwD9W~T-6kQ8efo3yY-1S6x5yLfUeJaqOvLSXnERdCHtt2EfInjMVwt7ooYpDputSsB8m-H2vxNSp4mCXHDR8DPCBmb4CNBYhgNtiIFu~AXvvnlNnseOMWxP52~o7nHIJy0m7ApaJGpknF0zTYketClmqDZ9-~Ku4HCugtlhBvVsfAkl6-hHqkrFI7pbJJUaRneDOAoGk0sbhkf5a10PzuFcepBV3bEzxqO30VQdF4c9B0h~SUSd3ROg5l2PP-fElU5nJRT2NfQ__' />
            <ApartmentImageCard imgUrl='https://s3-alpha-sig.figma.com/img/998d/054d/a2a41f062ccbc0bae7c5a4e53ed0a5a8?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~0h7a-R3zO40qg9GGz7q8H75Py7Phy8xoXvzJfFEVZ6GmOTh-XG3X8VpbZmIZNiBNmu3Q45Rv6-WNCFthHzPCkZxsyscJTbCXYaDE680XjCvusmrdV3KIMMMoDhOsGeog1gUaDLd~Km1V4CAcuDCp3Fte6Y-JrJ-q3k0kyFOFXHxa7hF871MRPhUG8cvoSgqUQGfpMR8j2-dTo0nK6MBsdmJ-xcfETVJo61gP5Su95YLD~~SVzelxKBoKxzxNa2KEbqPAc~oJeLa55lbus3gqagejH8wWQE9AAPtrmz9deClb~Ky68r5w3Qln4Nmu5P4hvHJJLNawL8JAz0adwpHw__'/>
            <ApartmentImageCard imgUrl='https://s3-alpha-sig.figma.com/img/6027/ea42/33a30e0b09833f39826b6b7643e427c3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oeh5TkJpy3JBXyZdwu5ymmA8heCbU7QANm0aqhmSxsss3um~X5bZr6zecnZPPmqf~Xl413f0nHE5yCsVsuDFjQjPu~2e7v-CrsluxbVj7cb5nBaTRAlZkHSul2mUYEdM8kh1YNiZ4oSBucxBu3X8BS45vksBrH6u8D-dANQR3V8PsMKuMFuhgyngCl5N9ASbhZDJzN-RWO5fU4vEwKRQ1VQSDfYBTvDodijR0Q6fBoUmgtzdxnil91HYTIeltDb~uPjxG28lfv9X28uE9cfQ4fCbze3ZC5DUAZgPKuVkA-Hr~5L0wKtUFGx3CDKe-hULWWNC6eA6TpnfD7lJQRHxUg__'/>
        </div>
          <Link to="/apartments" className="px-32 py-5 bg-pry-color hover:bg-teal-500 hover:cursor-pointer rounded-full border text-white text-base font-bold font-['Acumin Pro'] leading-normal">View More</Link>
    </div>
  )
}

export default Apartments