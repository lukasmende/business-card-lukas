import LegalLayout, { Section } from './LegalLayout';

export default function Imprint() {
  return (
    <LegalLayout
      title="Impressum"
      note="This page is provided in German, as required under German law (§ 5 DDG)."
    >
      <Section title="Angaben gemäß § 5 DDG">
        <p>
          Lukas Mendesevic
          <br />
          Mühlstr. 32A
          <br />
          75305 Neuenbürg
          <br />
          Deutschland
        </p>
      </Section>

      <Section title="Kontakt">
        <p>E-Mail: lukas@mendesevic.de</p>
      </Section>

      <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>
          Lukas Mendesevic
          <br />
          Mühlstr. 32A
          <br />
          75305 Neuenbürg
          <br />
          Deutschland
        </p>
      </Section>

      <Section title="EU-Streitschlichtung">
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
          bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0071e3] dark:text-[#2997ff] hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Meine E-Mail-Adresse finden Sie oben unter „Kontakt". Ich bin nicht verpflichtet und
          nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </Section>

      <Section title="Haftung für Inhalte">
        <p>
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
          allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend
          entfernen.
        </p>
      </Section>

      <Section title="Haftung für Links">
        <p>
          Diese Website enthält Links zu externen Websites Dritter (u. a. GitHub, Instagram), auf
          deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch
          keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
        <p>
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
          überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen werde ich derartige Links umgehend entfernen.
        </p>
      </Section>

      <Section title="Urheberrecht">
        <p>
          Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
          außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
          privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
      </Section>
    </LegalLayout>
  );
}
