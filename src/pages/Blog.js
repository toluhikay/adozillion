import React from 'react'
import Footer from '../components/Footer'
// import blogPosts from '../Api/blogPosts';


import blogImage1 from "../assets/images/blogPost1.png"
import blogImage2 from "../assets/images/blogPost2.png"
import blogImage3 from "../assets/images/blogPost3.png"
import blogImage4 from "../assets/images/blogPost4.png"
import blogImage5 from "../assets/images/blogPost5.png"
import blogImage6 from "../assets/images/blogPost6.png"
import blogImage7 from "../assets/images/blogPost7.png"
import blogImage8 from "../assets/images/blogPost8.png"
import blogImage9 from "../assets/images/blogPost9.png"
import blogImage10 from "../assets/images/blogPost10.png"
import blogImage11 from "../assets/images/blogPost11.png"
import blogImage12 from "../assets/images/blogPost12.png"
import blogImage13 from "../assets/images/blogPost13.png"
import blogImage14 from "../assets/images/blogPost14.png"
import blogImage15 from "../assets/images/blogPost15.png"
import blogImage16 from "../assets/images/blogPost16.png"
import blogImage17 from "../assets/images/blogPost17.png"



const blogThemes = ['Love', 'Love', 'Love']
const firstBlogTheme = ['Love', 'Romance', 'Family', 'Friends', 'Peace', 'Community']


// blogPosts.map((item, index) => {
//   console.log(item.date)
// } )

const Blog = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center w-11/12 mx-auto mt-20 text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]'>
      <div className='md:flex md:space-x-6 lg:space-x-8 md:mt-10 '>
        <div className='border-2 md:w-[65%] lg:w-8/12'>
        <img src={blogImage1} className='h-[200px] w-full object-cover'></img>
        <div className='w-11/12 mx-auto'>
          <p className='text-[10px] font-[inter] mt-1 md:text-[12px] lg:text-[14px] xl:text-[15px] sm:mt-2'>Jan 21, 2023/By admin</p>
          <div className='flex justify-between mt-2 sm:mt-4'>
            {firstBlogTheme.map((item, index) => {
              return(
                <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-1 rounded sm:px-2'>{item}</p>
              )
            })}
          </div>
          <p className='font-[600] mt-2 text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-[inter] sm:text-[20px] md:mt-4'>Ways to communicate in a relationship</p>
          <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
          <p className='mb-3'>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </p>
        </div>
        
        </div>
        <div className='mt-10 md:mt-0 border-2 md:w-[35%] lg:w-4/12 pb-2'>
          <img src={blogImage2} className='w-full h-[200px] object-center'></img>
          <div className='w-11/12 mx-auto'>
            <p className='text-[10px] font-[inter] mt-1 md:mt-2 md:text-[12px] lg:text-[13px] xl:text-[14px] '>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 md:w-10/12 mt-2 md:mt-4'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 md:mt-3 text-[18px] font-[inter] md:text-[20px] lg:text-[22px] xl:text-[23px]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='md:text-[13px] lg:text-[14px] xl:text-[16px] font-[400] font-[inter]'>Read more ...</a>
          </div>
          
        </div>
      </div>
      <div className=' md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6'>
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage3} className='w-full h-[200px] object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] font-[inter]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div> 
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage4} className='w-full h-[200px] object-bottom object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] font-[inter]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div>
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage5} className='w-full h-[200px] oject-top object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] font-[inter]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div> 
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage6} className='w-full h-[200px] object-center object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 font-[inter] text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='text-[12px] font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div>
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage7} className='w-full h-[200px] object-center object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 font-[inter] text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div> 
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage8} className='w-full h-[200px] object-top object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] font-[inter]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div>
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage9} className='w-full h-[200px] object-center object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] font-[inter]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div> 
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage10} className='w-full h-[200px] object-center object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] font-[inter]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div>
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage11} className='w-full h-[200px] object-center object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 font-[inter] text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div>
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage12} className='w-full h-[200px] object-center object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 font-[inter] text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div>
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage13} className='w-full h-[200px] object-bottom object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 font-[inter] text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div>
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage14} className='w-full h-[200px] object-center object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 font-[inter] text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div>
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage15} className='w-full h-[200px] object-center object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 font-[inter] text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div>
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage16} className='w-full h-[200px] object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 font-[inter] text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div>
        <div className='mt-10 border-2 pb-2'>
          <img src={blogImage17} className='w-full h-[200px] object-bottom object-cover'></img>
          <div className='w-11/12 mx-auto'>
            <p className='font-[inter] mt-1'>Jan 21, 2023/By admin</p>
            <div className='flex justify-between w-6/12 mt-2'>
              {blogThemes.map((item, index) => {
                return(
                  <p className='bg-[#DDB057] bg-opacity-10 text-[#DDB057] py-1 px-2 rounded'>{item}</p>
                )
              })}
            </div>
            <p className='font-[600] mt-2 font-[inter] text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px]'>Home deco tips</p>
            <p className='font-[400] font-[inter]'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus semEtiam eu turpis</p>
            <a className='font-[400] font-[inter]'>Read more ...</a>
          </div>
        </div>            
      </div>
      <button className=' mt-8 md:mt-12 lg:mt-16 rounded-full bg-black text-white px-8 py-1 text-sm lg:text-base md:px-16 md:py-3 lg:px-20 lg:py-5'>Load More</button>
      <div className=' mt-10 bg-[#B893491A] shadow-md rounded-lg mb-10 xl:mb-14'>
        <div className='text-white font-[Abril Fatface] px-6 py-10 lg:px-10 lg:py-14 xl:py-20 xl:px-14 text-xs bg-[#B89349] m-6 rounded-lg md:flex md:space-x-6'>
          <div className='md:w-6/12'>
            <h3 className='font-bold text-base md:text-[20px] lg:text-[25px] xl:text-[32px]'>Receive the latest News</h3>
            <p className='mt-2 md:mt-4 lg:mt-6 md:text-[14px] xl:text-[16px] font-[inter] font-400'>Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem</p>
          </div>
          <div className='mt-4 md:w-6/12 md:mt-0'>
            <h3 className='font-bold text-base md:text-[20px] lg:text-[25px] xl:text-[32px]'>Subscribe to our news letter</h3>
            <div className='mt-2 flex md:mt-4 lg:mt-6'>
              <button className='bg-[#D9D9D9] bg-opacity-50 w-10/12 py-2 md:py-3 lg:py-4 xl:py-5 rounded-full'></button>
              <button className='bg-black text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] w-4/12 py-2 md:py-3 lg:py-4  rounded-full ml-[-10%] '>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// const Blog = () => {
//   return (
//     <div>
//       {blogPosts.map((post, index) => (
//         <div key={index}>
//           <img src={post.img} alt="Blog Image" />
//           <h2>{post.title}</h2>
//           <p>{post.date}</p>
//           <p>{post.writeup}</p>
//         </div>
//       ))}
//     </div>
//   );
// };


export default Blog
