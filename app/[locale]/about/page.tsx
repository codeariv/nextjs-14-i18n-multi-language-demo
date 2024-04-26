import TranslationsProvider from "@/components/TranslationsProvider";
import Navigation from "@/components/Navigation";
import initializeTranslations from "@/app/i18n";

const i18nNamespaces = ["common"];

async function About({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Navigation />
      <div className="container">
        <div className="mt-5">
          <h1>{t("about.About title")}</h1>
          <p>{t("about.About description")}</p>
        </div>
      </div>
    </TranslationsProvider>
  );
}

export default About;
