import Fade from "react-reveal/Fade";

const BASE_DELAY = 100;
export const REST_DELAY = BASE_DELAY + 1000;

const texts = {
  pl: {
    title: "Będzie ślub!",
    subtitle: "szczegóły wkrótce",
    btn: "dodaj do kalendarza",
    event: "Ślub Dominiki i Bartka",
    city: "Warszawa",
  },
  en: {
    title: "Save the date!",
    subtitle: "all details coming soon",
    btn: "add to calendar",
    event: "Dominika and Bartek's wedding",
    city: "Warsaw",
  },
} as const;

type Props = {
  lang: keyof typeof texts;
};

const Date = ({ lang }: Props) => {
  return (
    <div className="section c-dateSec">
      <Fade delay={REST_DELAY}>
        <h1 className="-f18 -mb24">Dominika + Bartek</h1>
      </Fade>
      <div className="c-dateSec_date -pt150 -pb74 -mb24">
        <Fade delay={REST_DELAY}>
          <img src="/images/kwiat.png" />
        </Fade>
        <Fade delay={BASE_DELAY}>
          <h2 className="-f48 ">
            21
            <br />
            06
            <br />
            2024
          </h2>
        </Fade>
      </div>

      <Fade delay={REST_DELAY}>
        <h2 className="-f24 -mb8">{texts[lang].title}</h2>
        <p className="-f14">{texts[lang].subtitle}</p>

        <a
          href={`https://www.google.com/calendar/render?action=TEMPLATE&sf=true&output=xml&text=${texts[lang].event}&location=${texts[lang].city}&details=&dates=20240621/20240622`}
          target="_blank"
          rel="noreferrer"
          className="c-btn -mt24"
        >
          <span className="c-btn_label">{texts[lang].btn}</span>
        </a>
      </Fade>
    </div>
  );
};

export default Date;
