import LegalLayout, { Section } from './LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Datenschutzerklärung"
      note="This page is provided in German, as required under German law (Art. 13 GDPR)."
    >
      <Section title="1. Verantwortlicher">
        <p>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          <br />
          Lukas Mendesevic
          <br />
          Mühlstr. 32A
          <br />
          75305 Neuenbürg
          <br />
          Deutschland
          <br />
          E-Mail: lukas@mendesevic.de
        </p>
      </Section>

      <Section title="2. Allgemeines zur Datenverarbeitung">
        <p>
          Ich verarbeite personenbezogene Daten der Nutzer dieser Website grundsätzlich nur,
          soweit dies zur Bereitstellung einer funktionsfähigen Website sowie meiner Inhalte
          erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach
          Einwilligung des Nutzers oder soweit eine gesetzliche Regelung dies gestattet.
        </p>
      </Section>

      <Section title="3. Hosting bei Cloudflare Pages">
        <p>
          Diese Website wird bei Cloudflare Pages gehostet, einem Angebot der Cloudflare, Inc.,
          101 Townsend St, San Francisco, CA 94107, USA ("Cloudflare"). Beim Aufruf dieser Website
          werden automatisch Verbindungsdaten (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs)
          an die Server von Cloudflare übermittelt und dort verarbeitet, um die Website technisch
          bereitzustellen und auszuliefern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an einer sicheren und funktionsfähigen Bereitstellung der
          Website).
        </p>
        <p>
          Da Cloudflare auch Server außerhalb der EU/des EWR betreibt, kann es zu einer
          Datenübermittlung in Drittländer (u. a. USA) kommen; Cloudflare hat sich hierfür zur
          Einhaltung der EU-Standardvertragsklauseln verpflichtet. Weitere Informationen:{' '}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0071e3] dark:text-[#2997ff] hover:underline"
          >
            cloudflare.com/privacypolicy
          </a>
          .
        </p>
      </Section>

      <Section title="4. Server-Logfiles">
        <p>
          Beim Besuch dieser Website erhebt der Hosting-Anbieter automatisch Informationen in
          sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies sind:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp und -version</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer-URL (zuvor besuchte Seite)</li>
        </ul>
        <p>
          Diese Daten dienen der Gewährleistung eines störungsfreien Betriebs der Website sowie
          der IT-Sicherheit (Art. 6 Abs. 1 lit. f DSGVO) und werden nicht mit anderen
          Datenquellen zusammengeführt.
        </p>
      </Section>

      <Section title="5. Cookies">
        <p>
          Diese Website setzt selbst keine Cookies zu Analyse-, Marketing- oder Trackingzwecken
          ein. Sollte der Hosting-Dienstleister Cloudflare aus technischen Gründen oder zum Schutz
          vor Angriffen (z. B. Bot- und DDoS-Schutz) technisch notwendige Cookies setzen, erfolgt
          dies auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </Section>

      <Section title="6. Kontaktaufnahme per E-Mail">
        <p>
          Wenn Sie per E-Mail Kontakt mit mir aufnehmen, werden die von Ihnen mitgeteilten Daten
          (u. a. Ihre E-Mail-Adresse, ggf. Name und Nachrichteninhalt) von mir gespeichert, um
          Ihre Anfrage zu bearbeiten. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Beantwortung Ihrer Anfrage) bzw. Art. 6 Abs. 1 lit. b
          DSGVO, sofern die Kontaktaufnahme der Anbahnung eines Vertrags dient. Die Daten werden
          gelöscht, sobald sie für die Bearbeitung Ihrer Anfrage nicht mehr erforderlich sind.
        </p>
      </Section>

      <Section title="7. Externe Links">
        <p>
          Diese Website verlinkt auf externe Angebote Dritter, u. a. GitHub, Instagram und weitere
          persönliche Profile. Nach dem Anklicken eines solchen Links verlassen Sie diese Website;
          für die Datenverarbeitung auf den verlinkten Seiten ist der jeweilige Anbieter
          verantwortlich. Es gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
        </p>
      </Section>

      <Section title="8. SSL-/TLS-Verschlüsselung">
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
          Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt.
        </p>
      </Section>

      <Section title="9. Ihre Rechte">
        <p>Ihnen stehen gegenüber mir als Verantwortlichem folgende Rechte zu:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </ul>
        <p>
          Die für mich zuständige Aufsichtsbehörde ist der Landesbeauftragte für den Datenschutz
          und die Informationsfreiheit Baden-Württemberg.
        </p>
      </Section>

      <Section title="10. Stand dieser Datenschutzerklärung">
        <p>
          Stand: Juli 2026. Aufgrund der Weiterentwicklung dieser Website oder geänderter
          gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
        </p>
      </Section>
    </LegalLayout>
  );
}
