import { useTranslation } from "react-i18next";
// import { Link as RouterLink } from "react-router-dom";

export default function PartnersSection() {
const { t } = useTranslation();

return (
<section className="relative container">
<div className="relative mx-auto max-w-7xl py-16 ltr">
<div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
<div>
<img src="../assets/logo6.png" alt="image" className="w-[251.24px] h-[54.68px] bg-cover" />
<div className="text-[16px] max-w-2xl  text-black">
<div className="text-[#1A4FC6] font-bold text-[16px] max-w-2xl mt-[4%]">
{t('milestonesGrowth.text1')}
</div>

<div className="text-black text-[16px]  font-bold">
	<span className="text-[#2A5BCA]">-</span> 2006 :
	 <span className="text-[16px] text-black font-medium">
	{t('milestonesGrowth.text2')}
	</span>
</div>
<div className="text-black text-[16px]  font-bold">
	<span className="text-[#2A5BCA]">-</span> 2010 :
	 <span className="text-[16px] text-black font-medium">
	{t('milestonesGrowth.text3')}
	</span>
</div>
<div className="text-black text-[16px]  font-bold">
	<span className="text-[#2A5BCA]">-</span> 2015 :
	 <span className="text-[16px] text-black font-medium">
	{t('milestonesGrowth.text4')}
	</span>
</div>
<div className="text-black text-[16px]  font-bold">
	<span className="text-[#2A5BCA]">-</span> 2020 :
	 <span className="text-[16px] text-black font-medium">
	{t('milestonesGrowth.text5')}
	</span>
</div>
<div className="text-black text-[16px]  font-bold">
	<span className="text-[#2A5BCA]">-</span> 2023 :
	 <span className="text-[16px] text-black font-medium">
	{t('milestonesGrowth.text6')}
	</span>
</div>
</div>
</div>
<div className="w-[100%] flex justify-center">
<div className="flex w-[69%] flex-col">
<div className="flex flex-row-reverse items-end">
	<div className="flex flex-col items-start ltr">
	<div className="text-[#2A5BCA] text-[24.44px] font-bold">
		2006
</div>
		<div className="flex items-center text-center justify-center border-[#E5E5E5] h-[39.29px] w-[180px] border-[0.61px] p-[10px] rounded-[6.14px]">
		<div className="text-[#242424] text-[14px] font-medium">
			{t('milestonesGrowth.text7')}
		</div>
		</div>
	</div>
		<div className="mr-[8px] mb-[-5%]">
		<img src="../assets/line2.png" alt="line icon" className="w-[100%] h-[53.42px] bg-cover" />      
		</div>
</div>
<div className="flex flex-row items-end mt-[15px]">
	<div className="flex flex-col items-start rtl">
	<div className="text-[#2A5BCA] text-[24.44px] font-bold">
		2010
</div>
		<div className="flex items-center text-center justify-center border-[#E5E5E5] h-[39.29px] w-[180px] border-[0.61px] p-[10px] rounded-[6.14px]">
		<div className="text-[#242424] text-[14px] font-medium">
			{t('milestonesGrowth.text8')}
		</div>
		</div>
	</div>
		<div className="ml-[8px] mb-[-5%]">
		<img src="../assets/line2.png" alt="line icon" className="w-[100%] h-[53.42px] bg-cover" />      
		</div>
</div>
<div className="flex flex-row-reverse items-end mt-[15px]">
	<div className="flex flex-col items-start ltr">
	<div className="text-[#2A5BCA] text-[24.44px] font-bold">
		2015
</div>
		<div className="flex items-center text-center justify-center border-[#E5E5E5] h-[39.29px] w-[180px] border-[0.61px] p-[10px] rounded-[6.14px]">
		<div className="text-[#242424] text-[14px] font-medium">
			{t('milestonesGrowth.text9')}
		</div>
		</div>
	</div>
		<div className="mr-[8px] mb-[-5%]">
		<img src="../assets/line2.png" alt="line icon" className="w-[100%] h-[53.42px] bg-cover" />      
		</div>
</div>
<div className="flex flex-row items-end mt-[15px]">
	<div className="flex flex-col items-start rtl">
	<div className="text-[#2A5BCA] text-[24.44px] font-bold">
		2020
</div>
		<div className="flex items-center text-center justify-center border-[#E5E5E5] h-[39.29px] w-[180px] border-[0.61px] p-[10px] rounded-[6.14px]">
		<div className="text-[#242424] text-[14px] font-medium">
			{t('milestonesGrowth.text10')}
		</div>
		</div>
	</div>
		<div className="ml-[8px] mb-[-5%]">
		<img src="../assets/line2.png" alt="line icon" className="w-[100%] h-[53.42px] bg-cover" />      
		</div>
</div>
<div className="flex flex-row-reverse items-end mt-[15px]">
	<div className="flex flex-col items-start ltr">
	<div className="text-[#2A5BCA] text-[24.44px] font-bold">
		2023
</div>
		<div className="flex items-center text-center justify-center border-[#E5E5E5] h-[39.29px] w-[180px] border-[0.61px] p-[10px] rounded-[6.14px]">
		<div className="text-[#242424] text-[14px] font-medium">
			{t('milestonesGrowth.text11')}
		</div>
		</div>
	</div>
		<div className="mr-[8px] mb-[-5%]">
		<img src="../assets/line2.png" alt="line icon" className="w-[100%] h-[53.42px] bg-cover" />      
		</div>
</div>

</div>
</div>
</div>
</div>
</section>
);
}
