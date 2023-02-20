import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.23.2/antd.min.css"
          integrity="sha512-sQujA/BbGZTcsUrHu5Vt3WL1CJlfB6aouojDf6dxjfKddXqQQKCHbW5Z9BkB0b4VjI8V77jv9tTAxn7/YhLDtQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Lilita+One&family=Roboto:wght@400;500;700&family=Source+Code+Pro:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
