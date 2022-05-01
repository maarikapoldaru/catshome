<template>
  <vsa-list>
    <!-- Here you can use v-for to loop through items  -->
    <vsa-item>
      <vsa-heading> Kas varjupaigast võetud kassile tohib kohe kõike süüa anda? </vsa-heading>
      <vsa-content>
        Ei. Meil saavad kassid kogu siinoleku aja jooksul kuivtoitu, millega nende seedimine on juba harjunud. Järsk toiduvahetus võib looma
        mikrofloora sassi lüüa ning tulemuseks on kõhulahtisus. Seetõttu on hea anda kassile aega uue koduga harjuda ja alles siis hakata tema
        seedimist muu toiduga tasapisi harjutama (näiteks keefiri ja lihaga, piima ei üldse soovitatav). Sealjuures peaksid antavad kogused olema
        väikesed. Kohanemise ajal tuleks kassile anda kuivtoitu.
      </vsa-content>
    </vsa-item>
    <vsa-item>
      <vsa-heading style="text-align: left"> Kas steriliseerimine/kastreerimine mõjutab kassi käitumist? </vsa-heading>
      <vsa-content>
        Jah, mõjutab küll. Suguvõimetuks opereeritud loomad on stressivabamad ja rahulikumad. Nad saavad teiste loomade ja inimestega paremini läbi,
        ei jookse ära ja neil puudub põhjus teiste loomadega võistelda või neid rünnata. Sigimisvõimetuks opereeritud kassidel puudub vajadus oma
        territooriumi märgistada, samuti ei tee nad öiseid kontserte.
      </vsa-content>
    </vsa-item>
    <vsa-item>
      <vsa-heading> Kas steriliseerimine/kastreerimine mõjutab kassi tervist? </vsa-heading>
      <vsa-content>
        Ei mõjuta. Steriliseeritud/kastreeritud kassid kipuvad vähem liikuma, mistõttu tuleks jälgida nende toidukogust. Ülekaal võib sinu lemmikule
        saatuslikuks saada (seda olenemata sellest, kas loom on kastreeritud/steriliseeritud või mitte). Näiteks isastel kassidel on ülekaal tihti
        kuseteede, põie ja lõpuks neeruhaiguste põhjuseks. Osaliselt või mittetöötavad neerud lõpevad lemmikutele enamasti letaalselt.
      </vsa-content>
    </vsa-item>
    <vsa-item>
      <vsa-heading> Kas varjupaigas olevad kassid vaktsineeritakse? </vsa-heading>
      <vsa-content>
        Jah, kõik varjupaika sattuvad loomad vaktsineeritakse ja uude koju antakse neid peale immuunsuse tekkimist. Lisaks saavad loomad ussirohu.
      </vsa-content>
    </vsa-item>
    <vsa-item>
      <vsa-heading> Kas varjupaigas olevad kassid kiibitakse? </vsa-heading>
      <vsa-content> Jah, kõik varjupaika sattuvad kassid kiibitakse ja kantakse lemmikloomaregistrisse. </vsa-content>
    </vsa-item>
    <vsa-item>
      <vsa-heading> Kas varjupaigas olevatele kassidele tehakse oma pass? </vsa-heading>
      <vsa-content>
        Jah. Kõik loomad kassid vaktsineerimistunnistuse, kus on sees andmed kassi kohta, kiibinumber ja vaktsineerimise kuupäev.
      </vsa-content>
    </vsa-item>
    <vsa-item>
      <vsa-heading> Kas ma saan varjupaika tuua enda kassi? </vsa-heading>
      <vsa-content>
        Ei. Iga looma võtmisega kaasneb vastutus, mida iga looma võtja peab suutma kanda lemmiku elu lõpuni. Kui see pole mingil põhjusel võimalik,
        siis tuleb püüda oma lemmikule ise uus kodu leida või võtta vastu raske otsus ja lasta veterinaaril loom uinutada. Loomade varjupaik saab
        sellisel juhul aidata kuulutuse ülsepanekuga oma kodulehel.
      </vsa-content>
    </vsa-item>
    <vsa-item>
      <vsa-heading> Kas mul on võimalik kassi broneerida? </vsa-heading>
      <vsa-content> Ei, eraisikutele kassi ei broneerita. </vsa-content>
    </vsa-item>
  </vsa-list>
</template>

<script>
import { VsaList, VsaItem, VsaHeading, VsaContent, VsaIcon } from "vue-simple-accordion";
import "vue-simple-accordion/dist/vue-simple-accordion.css";

export default {
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon,
  },
};
</script>

<style scoped>
.vsa-list {
  --vsa-highlight-color: #3eaf7c;
}
</style>
