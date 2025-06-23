import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="bg-gray-900 text-white  w-full pb-3 pt-5">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
        
        <div class="md:mb-0">
            <h3 class="text-lg font-semibold">Contact Me</h3>
            <p class="text-gray-300 mt-2">📞 +91 9876543210</p>
            <p class="text-gray-300">✉️ tarunyaduwanshi0@gmail.com</p>
        </div>

        <div class="mb-6 hidden md:block md:mb-0">
            <h3 class="text-lg font-semibold">Follow Me</h3>
            <div >
                <div className='hover:underline py-1'><a href="https://www.instagram.com/yaduwanshi_tarun_" target="_blank" 
                   class="text-gray-300 hover:text-white transition">Instagram</a></div>
               <div className='hover:underline py-1'> <a  href="https://www.linkedin.com/in/tarun-yaduwanshi" target="_blank" 
                   class="text-gray-300 hover:text-white transition">LinkedIn</a></div>
            </div>
        </div>

        <div class="text-gray-400 text-sm hidden md:block">
            <p>&copy; 2025 Tarun Yaduwanshi. All rights reserved.</p>
        </div>

    </div>
</footer>
        </>

    )
}

export default Footer
