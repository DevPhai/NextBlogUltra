import { notFound } from 'next/navigation';
import { ArticleCardProps } from '../../../../utils/type';
import ArticleList from '../../../../components/artcleList';


// กำหนดหมวดหมู่ที่อนุญาต
const allowedCategories = ['ai', 'tech', 'science', 'health'];

export default async function Page({
    params,
    searchParams,
}: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    // ตรวจสอบ slug
    const { slug } = await params;
    const search = await searchParams;
    if (
        !slug || //เช็ค slug undefined 
        slug.length !== 2 || //เช็คว่า ส่ง slug 2  มาจริงไหม   เช่น   type/page 
        !allowedCategories.includes(slug)  //slug[0] ต้องอยู่ใน allowedCategories
        
    ) {
        console.log("Not Found");
        return notFound();
    }

    // const res = await fetch(`https://65f3bc51105614e654a100cf.mockapi.io/api/articles`, {
    //     cache: 'no-store',
    // });
    // if (!res.ok) {
    //     return notFound();
    // }
    // const data = await res.json();
    // mockup data 

    const mockData: ArticleCardProps[] = [
        {
            articleType: "normal",
            id: "1",
            title: "Data Analyst คือใคร รวมทุกแง่มุมของสายอาชีพ และทักษะที่สำคัญ",
            description:
                "เทคนิคไม่ลับของคนเรียน MIT กับวิธีการเลือกข้อมูลมานำเสนอให้ตรงจุดกับสิ่งที่คนฟังสนใจ ช่วยสร้าง Data Storytelling ที่ดีเวลาทำ Presentation",
            category: "Data",
            media: {
                imageUrl:
                    "https://img5.pic.in.th/file/secure-sv1/7048cd48de995dbe3091fd372ec80a9ddec94027.jpg",
                imageTitle: "Image Title 1",
            },
            creator: {
                name: "ภูวดี ธนสุนทรวงศ์",
                imageUrl:
                    "https://img2.pic.in.th/pic/8d45e68ff88c30e0628b8716ffd9754eb24c18ff.jpg",
            },
            createDate: "2023-11-16",
            viewCount: 12730,
        },
        {
            articleType: "normal",
            id: "2",
            title: "ปัญญาประดิษฐ์ 101: พื้นฐานของ AI ที่ทุกคนควรรู้",
            description:
                "ใช้ data เข้าถึงคน ทำระบบแก้ปัญหาคนตัวเล็กที่ถูกลืมสรุปเซสชัน เขย่าการเมือง ด้วยพลังข้อมูล Shaking Up Politics with Data โดยคุณยิ่งชีพ อัชฌานนท์ ผู้จัดการ iLaw , คุณปราบ เลาหะโรจนพันธ์ Senior Strategist AGO และคุณมนตรี ถนัดค้า Managing Director Landometer.com: จัดการที่ดิน อย่างเห็นอนาคต ในงาน Data Connect 2024",
            category: "AI",
            media: {
                imageUrl:
                    "https://img2.pic.in.th/pic/684af3ca8fc16695ef8d40ac63be25c481a4d654.jpg",
                imageTitle: "Image Title 2",
            },
            createDate: "2024-01-04",
            viewCount: 9621,
        },
        {
            articleType: "normal",
            id: "3",
            title: `ซีรีส์งานศิลปะดิจิทัล 'จะเกิดอะไรขึ้นถ้า...' อันน่าทึ่ง โดย Six N. Five`,
            description:
                "คือการเล่าเรื่องจากข้อมูลประกอบด้วย 3 elements คือ Data (ข้อมูล), Narrative (การเล่าเรื่อง) และ Visualization (การทำภาพ) ถ้าขาด 1 ในนี้ไปมันจะเป็นแค่ Infographic ธรรมดาๆ แต่ถ้ามีครบทั้ง 3 อย่างนี้มันจะเป็น Data Storytelling ที่ดีมากๆ",
            category: "ศิลปะ",
            media: {
                imageUrl:
                    "https://img2.pic.in.th/pic/e5efa88f8fad0fed231ba698855866fcee75edc7.jpg",
                imageTitle: "Image Title 3",
            },
            creator: {
                name: "ภูวดี ธนสุนทรวงศ์",
                imageUrl:
                    "https://img2.pic.in.th/pic/8d45e68ff88c30e0628b8716ffd9754eb24c18ff.jpg",
            },
            createDate: "2024-01-12",
            viewCount: 8307,
        },
        {
            articleType: "normal",
            id: "4",
            title: "Data Analyst คือใคร รวมทุกแง่มุมของสายอาชีพ และทักษะที่สำคัญ",
            description:
                "เทคนิคไม่ลับของคนเรียน MIT กับวิธีการเลือกข้อมูลมานำเสนอให้ตรงจุดกับสิ่งที่คนฟังสนใจ ช่วยสร้าง Data Storytelling ที่ดีเวลาทำ Presentation",
            category: "Data",
            media: {
                imageUrl:
                    "https://img5.pic.in.th/file/secure-sv1/7048cd48de995dbe3091fd372ec80a9ddec94027.jpg",
                imageTitle: "Image Title 1",
            },
            creator: {
                name: "ภูวดี ธนสุนทรวงศ์",
                imageUrl:
                    "https://img2.pic.in.th/pic/8d45e68ff88c30e0628b8716ffd9754eb24c18ff.jpg",
            },
            createDate: "2023-11-16",
            viewCount: 12730,
        },
        {
            articleType: "normal",
            id: "5",
            title: "ปัญญาประดิษฐ์ 101: พื้นฐานของ AI ที่ทุกคนควรรู้",
            description:
                "ใช้ data เข้าถึงคน ทำระบบแก้ปัญหาคนตัวเล็กที่ถูกลืมสรุปเซสชัน เขย่าการเมือง ด้วยพลังข้อมูล Shaking Up Politics with Data โดยคุณยิ่งชีพ อัชฌานนท์ ผู้จัดการ iLaw , คุณปราบ เลาหะโรจนพันธ์ Senior Strategist AGO และคุณมนตรี ถนัดค้า Managing Director Landometer.com: จัดการที่ดิน อย่างเห็นอนาคต ในงาน Data Connect 2024",
            category: "AI",
            media: {
                imageUrl:
                    "https://img2.pic.in.th/pic/684af3ca8fc16695ef8d40ac63be25c481a4d654.jpg",
                imageTitle: "Image Title 2",
            },
            createDate: "2024-01-04",
            viewCount: 9621,
        },
        {
            articleType: "normal",
            id: "6",
            title: `ซีรีส์งานศิลปะดิจิทัล 'จะเกิดอะไรขึ้นถ้า...' อันน่าทึ่ง โดย Six N. Five`,
            description:
                "คือการเล่าเรื่องจากข้อมูลประกอบด้วย 3 elements คือ Data (ข้อมูล), Narrative (การเล่าเรื่อง) และ Visualization (การทำภาพ) ถ้าขาด 1 ในนี้ไปมันจะเป็นแค่ Infographic ธรรมดาๆ แต่ถ้ามีครบทั้ง 3 อย่างนี้มันจะเป็น Data Storytelling ที่ดีมากๆ",
            category: "ศิลปะ",
            media: {
                imageUrl:
                    "https://img2.pic.in.th/pic/e5efa88f8fad0fed231ba698855866fcee75edc7.jpg",
                imageTitle: "Image Title 3",
            },
            creator: {
                name: "ภูวดี ธนสุนทรวงศ์",
                imageUrl:
                    "https://img2.pic.in.th/pic/8d45e68ff88c30e0628b8716ffd9754eb24c18ff.jpg",
            },
            createDate: "2024-01-12",
            viewCount: 8307,
        },
        {
            articleType: "normal",
            id: "7",
            title: "Data Analyst คือใคร รวมทุกแง่มุมของสายอาชีพ และทักษะที่สำคัญ",
            description:
                "เทคนิคไม่ลับของคนเรียน MIT กับวิธีการเลือกข้อมูลมานำเสนอให้ตรงจุดกับสิ่งที่คนฟังสนใจ ช่วยสร้าง Data Storytelling ที่ดีเวลาทำ Presentation",
            category: "Data",
            media: {
                imageUrl:
                    "https://img5.pic.in.th/file/secure-sv1/7048cd48de995dbe3091fd372ec80a9ddec94027.jpg",
                imageTitle: "Image Title 1",
            },
            creator: {
                name: "ภูวดี ธนสุนทรวงศ์",
                imageUrl:
                    "https://img2.pic.in.th/pic/8d45e68ff88c30e0628b8716ffd9754eb24c18ff.jpg",
            },
            createDate: "2023-11-16",
            viewCount: 12730,
        },
        {
            articleType: "normal",
            id: "8",
            title: "ปัญญาประดิษฐ์ 101: พื้นฐานของ AI ที่ทุกคนควรรู้",
            description:
                "ใช้ data เข้าถึงคน ทำระบบแก้ปัญหาคนตัวเล็กที่ถูกลืมสรุปเซสชัน เขย่าการเมือง ด้วยพลังข้อมูล Shaking Up Politics with Data โดยคุณยิ่งชีพ อัชฌานนท์ ผู้จัดการ iLaw , คุณปราบ เลาหะโรจนพันธ์ Senior Strategist AGO และคุณมนตรี ถนัดค้า Managing Director Landometer.com: จัดการที่ดิน อย่างเห็นอนาคต ในงาน Data Connect 2024",
            category: "AI",
            media: {
                imageUrl:
                    "https://img2.pic.in.th/pic/684af3ca8fc16695ef8d40ac63be25c481a4d654.jpg",
                imageTitle: "Image Title 2",
            },
            createDate: "2024-01-04",
            viewCount: 9621,
        },
        {
            articleType: "normal",
            id: "9",
            title: `ซีรีส์งานศิลปะดิจิทัล 'จะเกิดอะไรขึ้นถ้า...' อันน่าทึ่ง โดย Six N. Five`,
            description:
                "คือการเล่าเรื่องจากข้อมูลประกอบด้วย 3 elements คือ Data (ข้อมูล), Narrative (การเล่าเรื่อง) และ Visualization (การทำภาพ) ถ้าขาด 1 ในนี้ไปมันจะเป็นแค่ Infographic ธรรมดาๆ แต่ถ้ามีครบทั้ง 3 อย่างนี้มันจะเป็น Data Storytelling ที่ดีมากๆ",
            category: "ศิลปะ",
            media: {
                imageUrl:
                    "https://img2.pic.in.th/pic/e5efa88f8fad0fed231ba698855866fcee75edc7.jpg",
                imageTitle: "Image Title 3",
            },
            creator: {
                name: "ภูวดี ธนสุนทรวงศ์",
                imageUrl:
                    "https://img2.pic.in.th/pic/8d45e68ff88c30e0628b8716ffd9754eb24c18ff.jpg",
            },
            createDate: "2024-01-12",
            viewCount: 8307,
        },

    ];

    // ดึงค่าจาก query string
    const type = slug[0];
    const page = slug[1];
    const filter = search.filter;
    const category = search.category;
    const searchText = search.searchText;

    return (
        <>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="grid-cols-1 gap-[32px] row-start-2 items-center sm:items-start">
                    <div>Type: {type}</div>
                    <div>Page: {page}</div>
                    <div>Filter: {filter}</div>
                    <div>Category: {category}</div>
                    <div>Search Text: {searchText}</div>


                    {mockData && mockData.length > 0 ? (

                        <ArticleList Articles={mockData} />


                    ) : (
                        <div>No articles found.</div>
                    )}
                </main>
            </div>

        </>

    );
}