// Styles, components, etc
import styles from '@styles/legalsPage.module.css';
import { DividerDesktop, DividerMobile } from '@components/Dividers';
import { LEGALS } from '@config/legals.config';
import BreadcrumbJsonLD from '@components/BreadcrumbJsonLD';

export default async function LegalPage({ params }) {
  const { legal } = await params;

  const currentDoc = Object.values(LEGALS).find(d => d.link === legal);

  return (
    <>
      <main className={styles.page}>
        <section className={styles.contentContainer}>
          {currentDoc ? (
            <section className={styles.documentSection}>
              <div className={styles.contentContainer}>
                <h1 className={styles.sectionTitle}>{currentDoc.title}</h1>
                <div className={styles.desktopDivider}>
                  <DividerDesktop color={'#304B73'} />
                </div>

                <div className={styles.mobileDivider}>
                  <DividerMobile color={'#304B73'} />
                </div>
                <div className={styles.document}>{currentDoc.content}</div>
              </div>
            </section>
          ) : (
            <h1 className={styles.notFound}>Документ не найден</h1>
          )}
        </section>
      </main>

      <BreadcrumbJsonLD breadcrumbs={currentDoc.breadcrumbs} />
    </>
  );
}
