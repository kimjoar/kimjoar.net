import Background from "./Background";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <div className="background">
        <Background />
      </div>
      <div className="content">
        <div className="container">
          <header>
            <h1>Kim Joar Bekkelund</h1>
          </header>

          {children}
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
        }

        .background {
          grid-area: 1 / 1 / 2 / 2;
        }

        .content {
          grid-area: 1 / 1 / 2 / 2;
          z-index: 2;
          display: grid;
          justify-content: center;
          align-content: flex-start;
          margin: 5rem;
        }

        .container {
          background-color: #fff;
          border-radius: 0.5rem;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        header {
          margin-bottom: 2rem;
        }

        h1 {
          margin: 0;
          line-height: 1.15;
          font-family: "Reenie Beanie", cursive;
          font-size: 5rem;
          text-align: center;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
