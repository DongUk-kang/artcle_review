import React from "react";
import Article from "./Article";

const App = () => {
  const articles = [
    {
      id: 8,
      author_id: 2,
      author_name: "wagna470",
      author_email: "wagna470bdx@fropp.com",
      title: "8 منشور جديد",
      overview: "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل...",
      content: "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني.",
      published_at: "2020-12-05"
    },
    {
      id: 9,
      author_id: 33,
      author_name: "evfatima21",
      author_email: "aicancel8bdx@yopmail.com",
      title: "9 Nueva publicación",
      overview: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y...",
      content: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
      published_at: "2020-12-04"
    },
    {
      id: 16,
      author_id: 9,
      author_name: "hxdye23",
      author_email: "hxdye23bdx@yopmail.com",
      title: "16 Nueva publicación",
      overview: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y...",
      content: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
      published_at: "2020-11-27"
    }
]
    return (
      <div>
        {articles.map(article => (

            <Article title={article.title} content={article.content} published_at={article.published_at} />
        ))}
      </div>

  );
};

export default App;
