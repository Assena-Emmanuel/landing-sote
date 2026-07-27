<script setup>
import { ref } from "vue";

const activeTab = ref("cgu");
</script>

<template>
  <section class="section">
    <div class="wrap">
      <div class="section-head" style="margin-bottom: 30px">
        <div class="kicker">Informations légales</div>
        <h2>Conditions & Confidentialité</h2>
        <p>Dernière mise à jour : 22 juillet 2026</p>
      </div>

      <div class="tabs">
        <button
          class="tab"
          :class="{ active: activeTab === 'cgu' }"
          @click="activeTab = 'cgu'"
        >
          Conditions Générales d'Utilisation
        </button>
        <button
          class="tab"
          :class="{ active: activeTab === 'confidentialite' }"
          @click="activeTab = 'confidentialite'"
        >
          Politique de Confidentialité
        </button>
      </div>

      <div class="legal-card">
        <!-- CGU -->
        <div v-if="activeTab === 'cgu'" class="legal-content">
          <h3>1. Objet</h3>
          <p>
            Les présentes Conditions Générales d'Utilisation (CGU) encadrent
            l'accès et l'utilisation de l'application mobile Sotê, éditée pour
            la gestion de biens immobiliers, le suivi des loyers et la mise en
            relation avec des prestataires de services. En créant un compte,
            l'utilisateur accepte sans réserve l'ensemble des présentes
            conditions.
          </p>

          <h3>2. Profils d'utilisateurs</h3>
          <p>
            Sotê propose trois types de comptes : Propriétaire, Locataire et
            Artisan/Prestataire. Chaque profil dispose de fonctionnalités
            spécifiques et s'engage à fournir des informations exactes lors de
            son inscription.
          </p>

          <h3>3. Utilisation du service</h3>
          <p>
            L'utilisateur s'engage à utiliser Sotê conformément à sa destination
            : gestion de biens, suivi de paiements de loyers, et mise en
            relation avec des prestataires. Toute utilisation frauduleuse,
            abusive ou contraire aux lois en vigueur en Côte d'Ivoire et dans
            les pays où le service est disponible pourra entraîner la suspension
            du compte.
          </p>

          <h3>4. Paiements et transactions</h3>
          <p>
            Sotê facilite le suivi et, selon les fonctionnalités activées, le
            paiement des loyers entre locataires et propriétaires. Sotê n'est
            pas partie au contrat de bail et décline toute responsabilité quant
            aux litiges relatifs au contenu des baux ou des prestations
            réalisées par les artisans référencés.
          </p>

          <h3>5. Responsabilité</h3>
          <p>
            Sotê met tout en œuvre pour assurer la disponibilité et la fiabilité
            du service, sans garantie de continuité absolue. La responsabilité
            de Sotê ne saurait être engagée en cas d'interruption temporaire, de
            perte de données liée à un cas de force majeure, ou d'utilisation
            non conforme de l'application.
          </p>

          <h3>6. Résiliation</h3>
          <p>
            Chaque utilisateur peut supprimer son compte à tout moment depuis
            les paramètres de l'application. Sotê se réserve le droit de
            suspendre ou clôturer un compte en cas de violation des présentes
            CGU.
          </p>

          <h3>7. Modification des CGU</h3>
          <p>
            Sotê se réserve le droit de modifier les présentes CGU à tout
            moment. Les utilisateurs seront informés de toute modification
            substantielle via l'application.
          </p>

        </div>

        <!-- Confidentialité -->
        <div v-else class="legal-content">
          <h3>1. Données collectées</h3>
          <p>
            Sotê collecte les informations nécessaires à la création et à la
            gestion du compte : nom, prénoms, numéro de téléphone, adresse des
            biens, historique des paiements, et selon le profil, les
            informations relatives aux services proposés par les artisans.
          </p>

          <h3>2. Utilisation des données</h3>
          <p>
            Les données sont utilisées pour assurer le fonctionnement du service
            : suivi des loyers, mise en relation entre propriétaires, locataires
            et prestataires, envoi de notifications, et amélioration continue de
            l'application.
          </p>

          <h3>3. Partage des données</h3>
          <p>
            Les données personnelles ne sont partagées avec des tiers qu'avec le
            consentement explicite de l'utilisateur, ou lorsque la loi l'exige.
            Les informations de paiement sont traitées de manière chiffrée et ne
            sont jamais revendues à des fins commerciales.
          </p>

          <h3>4. Sécurité</h3>
          <p>
            Sotê met en œuvre des mesures techniques et organisationnelles pour
            protéger les données personnelles contre tout accès non autorisé,
            perte ou divulgation.
          </p>

          <h3>5. Droits des utilisateurs</h3>
          <p>
            Chaque utilisateur peut demander l'accès, la rectification ou la
            suppression de ses données personnelles à tout moment, en contactant
            le support depuis l'application.
          </p>

          <h3>6. Conservation des données</h3>
          <p>
            Les données sont conservées pendant toute la durée d'utilisation du
            compte, puis archivées ou supprimées conformément aux obligations
            légales applicables.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrap {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 28px;
}
.section {
  padding: 80px 0 110px 0;
}
.kicker {
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green-primary);
  margin-bottom: 12px;
}
.section-head h2 {
  font-size: 30px;
  font-weight: 800;
  color: var(--green-dark);
  margin-bottom: 8px;
}
.section-head p {
  font-size: 13.5px;
  color: var(--ink-soft);
}
.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}
.tab {
  background: var(--white);
  border: 1.5px solid var(--line);
  color: var(--ink-soft);
  font-size: 13.5px;
  font-weight: 700;
  padding: 10px 18px;
  border-radius: 11px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
}
.tab.active {
  background: var(--green-primary);
  color: white;
  border-color: var(--green-primary);
}
.legal-card {
  background: var(--white);
  border-radius: 20px;
  padding: 40px 44px;
  box-shadow: 0 6px 24px rgba(45, 90, 61, 0.06);
  border: 1px solid var(--line);
}
.legal-content h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--green-dark);
  margin: 26px 0 10px 0;
}
.legal-content h3:first-child {
  margin-top: 0;
}
.legal-content p {
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.7;
}
.legal-disclaimer {
  margin-top: 30px;
  padding: 16px 18px;
  background: var(--green-light);
  border-radius: 12px;
  font-size: 13px;
  color: var(--green-dark);
  line-height: 1.6;
}
@media (max-width: 640px) {
  .legal-card {
    padding: 28px 22px;
  }
}
</style>
