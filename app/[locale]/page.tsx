import TranslationsProvider from "@/components/TranslationsProvider";
import Navigation from "@/components/Navigation";
import initialTranslations from "../i18n";

const i18nNamespaces = ["home"];

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initialTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navigation />
      <div className="container">
        <div className="mt-5">
          <h1>{t("Home title")}</h1>
          <p>{t("Home description")}</p>
        </div>
      </div>
    </TranslationsProvider>
  );
}

export default Home;
