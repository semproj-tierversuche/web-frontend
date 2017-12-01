import {Injectable} from '@angular/core';
import {MiddlewareData, Origin} from '../common/middleware.data';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MiddlewareService {

  constructor() {
  }

  getExampleResults(): MiddlewareData {
    return this.exampleResponse();
  }

  getInputMetaData(pmid: number): Observable<Origin> {
    return Observable.create(observer => {
      observer.next(this.exampleOriginData());
      observer.complete();
    });
  }

  getResults(pmid: number): Observable<MiddlewareData> {
    return Observable.create(observer => {
      observer.next(this.exampleResponse());
      observer.complete();
    });
  }


  private exampleResponse(): MiddlewareData {
    const example: MiddlewareData = {
      // Input Publication
      'Origin': {
        'Abstract': [
          'This study investigated whether memantine, a non-competitive NMDA receptor antagonist is neuroprotective after traumatic brain injury (TBI) induced in adult rats with a controlled cortical impact device. TBI led to significant neuronal death in the hippocampal CA2 and CA3 regions (by 50 and 59%, respectively), by 7 days after the injury. Treatment of rats with memantine (10 and 20 mg/Kg, i.p.) immediately after the injury significantly prevented the neuronal loss in both CA2 and CA3 regions. This is the first study showing the neuroprotective potential of memantine to prevent the TBI-induced neuronal damage.'
        ],
        'Annotations': [],
        'Authors': [
          'Rao, V L',
          'Dogan, A',
          'Todd, K G',
          'Bowen, K K',
          'Dempsey, R J'
        ],
        'Date': '2001',
        'Identifier': [],
        'Journal': [
          'Brain research'
        ],
        'Keywords': [],
        'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/11489449',
        'MeshHeadings': [
          'Animals',
          'Brain Injuries',
          'Dose-Response Relationship, Drug',
          'Excitatory Amino Acid Antagonists',
          'Hippocampus',
          'Male',
          'Memantine',
          'Nerve Degeneration',
          'Neurons',
          'Neuroprotective Agents',
          'Rats',
          'Rats, Sprague-Dawley',
          'Receptors, N-Methyl-D-Aspartate'
        ],
        'PMID': 11489449,
        'PublicationType': 'Journal Article',
        'Substances': [],
        'Suggest': '',
        'TextminingVersion': '0',
        'Title': 'Neuroprotection by memantine, a non-competitive NMDA receptor antagonist after traumatic brain injury in rats.'
    },
        // Output Publication
      'Results': [
        {
          'Matching': {
            'AnimalTest': 'both',
            'Relevance': 0.99,
            'Similar': false
          },
          'Record': {
            'Abstract': [
              'The over-activation of glutamate receptors can lead to excitotoxic cell death and is believed to be involved in the progression of neurodegenerative events in the vulnerable hippocampus. Here, we used an in vitro slice model to study toxicity produced in the hippocampus by the mitochondrial toxin 3-nitropropionic acid (3-NP). The organotypic slice cultures exhibit native cellular organization as well as dense arborization of neuronal processes and synaptic contacts. The hippocampal slices were exposed to 3-NP for 2-20 days, causing calpain-mediated breakdown of the spectrin cytoskeleton, a loss of pre- and postsynaptic markers, and neuronal atrophy. The N-methyl-D-aspartate (NMDA) receptor antagonist memantine reduced both the cytoskeletal damage and synaptic decline in a dose-dependent manner. 3-NP-induced cytotoxicity, as determined by the release of lactate dehydrogenase, was also reduced by memantine with EC50 values from 1.7 to 2.3 microM. Propidium iodide fluorescence and phase contrast microscopy confirmed memantine neuroprotection against the chronic toxin exposure. In addition, the protected tissue exhibited normal neuronal morphology in the major hippocampal subfields. These results indicate that antagonists of NMDA-type glutamate receptors are protective during the toxic outcome associated with mitochondrial dysfunction. They also provide further evidence of memantine\'s therapeutic potential against neurodegenerative diseases.'
            ],
            'Annotations': [],
            'Authors': [
              'Karanian, David A',
              'Baude, Andrea S',
              'Brown, Queenie B',
              'Parsons, Christopher G',
              'Bahr, Ben A'
            ],
            'Date': '2006',
            'Identifier': [],
            'Journal': [
              'Hippocampus'
            ],
            'Keywords': [],
            'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/16897723',
            'MeshHeadings': [
              'Animals',
              'Animals, Newborn',
              'Cytoskeleton',
              'Dose-Response Relationship, Drug',
              'Excitatory Amino Acid Antagonists',
              'Glutamic Acid',
              'Hippocampus',
              'Memantine',
              'Mitochondria',
              'Nerve Degeneration',
              'Neural Pathways',
              'Neurodegenerative Diseases',
              'Neurons',
              'Neuroprotective Agents',
              'Neurotoxins',
              'Nitro Compounds',
              'Organ Culture Techniques',
              'Propionates',
              'Rats',
              'Rats, Sprague-Dawley',
              'Receptors, N-Methyl-D-Aspartate',
              'Synapses',
              'Synaptic Transmission'
            ],
            'PMID': 16897723,
            'PublicationType': 'Journal Article',
            'Substances': [],
            'Suggest': '',
            'TextminingVersion': '0',
            'Title': '3-Nitropropionic acid toxicity in hippocampus: protection through N-methyl-D-aspartate receptor antagonism.'
          }
        },
        {
          'Matching': {
            'AnimalTest': 'both',
            'Relevance': 0.98,
            'Similar': false
          },
          'Record': {
            'Abstract': [
              'The pathogenesis of stroke, trauma and chronic degenerative diseases, such as Alzheimer\'s disease (AD), has been linked to excitotoxic processes due to inappropriate stimulation of the N-methyl-D-aspartate receptor (NMDA-R). Attempts to use potent competitive NMDA-R antagonists as neuroprotectants have shown serious side-effects in patients. As an alternative approach, we were interested in the anti-excitotoxic properties of memantine, a well-tolerated low affinity uncompetitive NMDA-R antagonist presently used as an anti-dementia agent. We explored in a series of models of increasing complexity, whether this voltage-dependent channel blocker had neuroprotective properties at clinically relevant concentrations. As expected, memantine protected neurons in organotypic hippocampal slices or dissociated cultures from direct NMDA-induced excitotoxicity. However, low concentrations of memantine were also effective in neuronal (cortical neurons and cerebellar granule cells) stress models dependent on endogenous glutamate stimulation and mitochondrial stress, i.e. exposure to hypoxia, the mitochondrial toxin 1-methyl-4-phenylpyridinium (MPP+) or a nitric oxide (NO) donor. Furthermore, memantine reduced lethality and brain damage in vivo in a model of neonatal hypoxia-ischemia (HI). Finally, we investigated functional rescue (neuronal capacity to migrate along radial glia) by memantine in cerebellar microexplant cultures exposed to the indirect excitotoxin 3-nitropropionic acid (3-NP). Potent NMDA-R antagonists, such as (+)MK-801, are known to block neuronal migration in microexplant cultures. Interestingly, memantine significantly restored the number of neurons able to migrate out of the stressed microexplants. These findings suggest that inhibition of the NMDA-R by memantine is sufficient to block excitotoxicity, while still allowing some degree of signalling.'
            ],
            'Annotations': [],
            'Authors': [
              'Volbracht, Christiane',
              'van Beek, Johan',
              'Zhu, Changlian',
              'Blomgren, Klas',
              'Leist, Marcel'
            ],
            'Date': '2006',
            'Identifier': [],
            'Journal': [
              'The European journal of neuroscience'
            ],
            'Keywords': [],
            'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/16817864',
            'MeshHeadings': [
              'Animals',
              'Apoptosis',
              'Dizocilpine Maleate',
              'Excitatory Amino Acid Antagonists',
              'Hippocampus',
              'Hypoxia-Ischemia, Brain',
              'In Vitro Techniques',
              'Memantine',
              'Membrane Potentials',
              'Mice',
              'Mice, Inbred BALB C',
              'Neurons',
              'Neuroprotective Agents',
              'Receptors, N-Methyl-D-Aspartate'
            ],
            'PMID': 16817864,
            'PublicationType': 'Journal Article',
            'Substances': [],
            'Suggest': '',
            'TextminingVersion': '0',
            'Title': 'Neuroprotective properties of memantine in different in vitro and in vivo models of excitotoxicity.'
          }
        },
        {
          'Matching': {
            'AnimalTest': 'both',
            'Relevance': 0.97,
            'Similar': true
          },
          'Record': {
            'Abstract': [
              'Recent experimental evidence indicates that erythropoietin (Epo), in addition to its hormonal role in regulating red cell production, operates as a neuroprotective agent. So far, the neuroprotective effect of human recombinant Epo (rhEpo) has been mainly demonstrated in models of cerebral ischemia/hypoxia and in selected in vivo studies of traumatic neuronal injury. To further investigate the potential role of this multifunctional trophic factor in post-traumatic cell death, we examined the protective effects of rhEpo in a newly developed model of mechanical trauma in organotypic hippocampal slices. Organotypic rat hippocampal slices were subjected to traumatic injury by allowing a stylus to impact on the CA1 area with an energy of 6 microJ. Hippocampal damage was identified and measured 24 and 48 h later with the fluorescent dye propidium iodide (PI). In untreated slices, the impact induced a significant increase in the mean hippocampal PI fluorescence, co-localized with the area of impact at 24 h (primary post-traumatic injury) and progressively spread to the whole slice between 24 and 48 h (secondary post-traumatic injury). Addition of rhEpo (1-100 UI/mL) or of the NMDA antagonist MK-801 (30 microM) immediately after the traumatic injury reduced hippocampal damage by approximately 30% when observed 24 h later. At 48 h after trauma, the protective effect of rhEpo was greater (by about 47%) and significantly more pronounced than that of MK-801 (28%). Our results suggest that the neuroprotective activity of rhEpo is particularly effective against delayed, secondary post-traumatic damage. This well tolerated agent could provide a therapeutic benefit in pathologies involving post-traumatic neurodegeneration.'
            ],
            'Annotations': [],
            'Authors': [
              'Adembri, Chiara',
              'Bechi, Annalisa',
              'Meli, Elena',
              'Gramigni, Elena',
              'Venturi, Luna',
              'Moroni, Flavio',
              'De Gaudio, A Raffaele',
              'Pellegrini-Giampietro, Domenico E'
            ],
            'Date': '2004',
            'Identifier': [],
            'Journal': [
              'Journal of neurotrauma'
            ],
            'Keywords': [],
            'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/15319009',
            'MeshHeadings': [
              'Animals',
              'Animals, Newborn',
              'Brain Injuries',
              'Dizocilpine Maleate',
              'Down-Regulation',
              'Erythropoietin',
              'Excitatory Amino Acid Antagonists',
              'Hippocampus',
              'In Vitro Techniques',
              'Models, Biological',
              'Nerve Degeneration',
              'Neurons',
              'Neuroprotective Agents',
              'Propidium',
              'Rats',
              'Rats, Wistar',
              'Recombinant Fusion Proteins',
              'Recombinant Proteins',
              'Treatment Outcome'
            ],
            'PMID': 15319009,
            'PublicationType': 'Journal Article',
            'Substances': [],
            'Suggest': '',
            'TextminingVersion': '0',
            'Title': 'Erythropoietin attenuates post-traumatic injury in organotypic hippocampal slices.'
          }
        },
        {
          'Matching': {
            'AnimalTest': 'both',
            'Relevance': 0.96,
            'Similar': false
          },
          'Record': {
            'Abstract': [
              'The effects of selective blockade of group I metabotropic glutamate receptor subtype 1 (mGluR1) on neuronal cell survival and post-traumatic recovery was examined using rat in vitro and in vivo trauma models. The selective mGluR1 antagonists (RS)-1-aminoindan-1,5-dicarboxylic acid (AIDA), 7-(hydroxyimino)cyclopropa[b]chromen-1a-carboxylate ethyl ester (CPCCOEt), and (S)-(+)-alpha-amino-4-carboxy-2-methylbezeneacetic acid (LY367385) provided significant neuroprotection in rat cortical neuronal cultures subjected to mechanical injury, in both pretreatment or posttreatment paradigms. Administration of the antagonists also attenuated glutamate-induced neuronal cell death in the cultures. Coapplication of these antagonists with the N-methyl-d-aspartate (NMDA) receptor antagonist (5R,10S)-(+)-5-methyl-10,11-dihydro-5H-dibenzo[a,d]cyclohepten-5,10-imine (MK-801) had additive neuroprotective effects in glutamate injured cultures. Intracerebroventricular administration of AIDA to rats markedly improved recovery from motor dysfunction after lateral fluid percussion induced traumatic brain injury (TBI). Treatment with mGluR1 antagonists also significantly reduced lesion volumes in rats after TBI, as evaluated by MRI. It appears that these compounds mediate their neuroprotective effect through an mGluR1 antagonist action, as demonstrated by inhibition of agonist induced phosphoinositide hydrolysis in our in vitro system. Moreover, AIDA, CPCCOEt, and LY367385, at concentrations shown to be neuroprotective, had no significant effects on the steady state NMDA evoked whole cell current. Taken together, these data suggest that modulation of mGluR1 activity may have substantial therapeutic potential in brain injury.'
            ],
            'Annotations': [],
            'Authors': [
              'Faden, A I',
              'O\'Leary, D M',
              'Fan, L',
              'Bao, W',
              'Mullins, P G',
              'Movsesyan, V A'
            ],
            'Date': '2001',
            'Identifier': [],
            'Journal': [
              'Experimental neurology'
            ],
            'Keywords': [],
            'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/11161632',
            'MeshHeadings': [
              'Animals',
              'Benzoates',
              'Brain Injuries',
              'Cell Death',
              'Cells, Cultured',
              'Chromones',
              'Disease Models, Animal',
              'Dizocilpine Maleate',
              'Drug Synergism',
              'Evoked Potentials',
              'Excitatory Amino Acid Antagonists',
              'Glycine',
              'In Vitro Techniques',
              'Indans',
              'Injections, Intraventricular',
              'Male',
              'Models, Biological',
              'Neuroprotective Agents',
              'Patch-Clamp Techniques',
              'Rats',
              'Rats, Sprague-Dawley',
              'Receptors, Metabotropic Glutamate',
              'Receptors, N-Methyl-D-Aspartate',
              'Wounds, Nonpenetrating'
            ],
            'PMID': 11161632,
            'PublicationType': 'Journal Article',
            'Substances': [],
            'Suggest': '',
            'TextminingVersion': '0',
            'Title': 'Selective blockade of the mGluR1 receptor reduces traumatic neuronal injury in vitro and improvesoOutcome after brain trauma.'
          }
        },
        {
          'Matching': {
            'AnimalTest': 'both',
            'Relevance': 0.95,
            'Similar': true
          },
          'Record': {
            'Abstract': [
              'The relationship between an initial mechanical event causing brain tissue deformation and delayed neurodegeneration in vivo is complex because of the multiplicity of factors involved. We have used a simplified brain surrogate based on rat hippocampal slices grown on deformable silicone membranes to study stretch-induced traumatic brain injury. Traumatic injury was induced by stretching the culture substrate, and the biological response characterized after 4 days. Morphological abnormalities consistent with traumatic injury in humans were widely observed in injured cultures. Synaptic function was significantly reduced after a severe injury. The N-methyl-D-aspartate (NMDA) receptor antagonist MK-801 attenuated neuronal damage, prevented loss of microtubule-associated protein 2 immunoreactivity and attenuated reduction of synaptic function. In contrast, the NMDA receptor antagonists 3-[(R)-2-carboxypiperazin-4-yl]-propyl-1-phosphonic acid (CPP) and GYKI53655, were neuroprotective in a moderate but not a severe injury paradigm. Nifedipine, an L-type voltage-dependent calcium channel antagonist was protective only after a moderate injury, whereas omega-conotoxin attenuated damage following severe injury. These results indicate that the mechanism of damage following stretch injury is complex and varies depending on the severity of the insult. In conclusion, the pharmacological, morphological and electrophysiological responses of organotypic hippocampal slice cultures to stretch injury were similar to those observed in vivo. Our model provides an alternative to animal testing for understanding the mechanisms of post-traumatic delayed cell death and could be used as a high-content screen to discover neuroprotective compounds before advancing to in vivo models.'
            ],
            'Annotations': [],
            'Authors': [
              'Cater, Heather L',
              'Gitterman, Daniel',
              'Davis, Susan M',
              'Benham, Christopher D',
              'Morrison, Barclay',
              'Sundstrom, Lars E'
            ],
            'Date': '2007',
            'Identifier': [],
            'Journal': [
              'Journal of neurochemistry'
            ],
            'Keywords': [],
            'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/17250683',
            'MeshHeadings': [
              'Animals',
              'Brain Injuries',
              'Calcium Channel Blockers',
              'Calcium Channels',
              'Excitatory Amino Acid Antagonists',
              'Excitatory Postsynaptic Potentials',
              'Glutamic Acid',
              'Hippocampus',
              'Membranes, Artificial',
              'Microtubule-Associated Proteins',
              'Models, Neurological',
              'Nerve Degeneration',
              'Neuroprotective Agents',
              'Neurotoxins',
              'Organ Culture Techniques',
              'Physical Stimulation',
              'Rats',
              'Receptors, Glutamate',
              'Silicones',
              'Stress, Mechanical',
              'Synaptic Transmission'
            ],
            'PMID': 17250683,
            'PublicationType': 'Journal Article',
            'Substances': [],
            'Suggest': '',
            'TextminingVersion': '0',
            'Title': 'Stretch-induced injury in organotypic hippocampal slice cultures reproduces in vivo post-traumatic neurodegeneration: role of glutamate receptors and voltage-dependent calcium channels.'
          }
        },
        {
          'Matching': {
            'AnimalTest': 'both',
            'Relevance': 0.94,
            'Similar': false
          },
          'Record': {
            'Abstract': [
              'Excessive activation of glutamate receptors of the N-methyl-D-aspartate (NMDA) subtype is considered a relevant initial step underlying different neurodegenerative diseases. Recently, with the approval of memantine to treat Alzheimer dementia, NMDA receptors have regained clinical interest. Accordingly, the development and validation of NMDA receptor antagonists is being reconsidered. We recently identified a family of trialkylglycines that act as channel blockers of the NMDAreceptor. Their neuroprotective activity against excitotoxic insults remains elusive. To address this issue, we first characterized the contribution of glutamate receptor subtypes to hippocampal death in culture as a function of days in culture in vitro (DIV). Whereas at 7 DIV neither NMDA nor glutamate produced a significant neuronal death, at 14 and 21 DIV, NMDA produced the death of 40% of the neurons exposed to this receptor agonist that was fully protected by MK-801. Similar results were obtained for L-glutamate at 14 DIV. In contrast, when neurons at 21 DIV were used, glutamate killed 51.1 +/- 4.9% of the neuronal population. This neuronal death was only partially prevented by MK-801, and fully abrogated by a combination of MK-801 and 6-cyano-7-nitroquinoxaline-2,3-dione (CNQX). Glucose deprivation injured 37.1 +/- 9.2% of the neurons through a mechanism sensitive to MK-801. The family of recently identified N-alkylglycines tested protected neurons against NMDA and glucosedeprivation toxicity, but not against glutamate toxicity. Noteworthy, N-alkylglicines with a moderate protection against NMDA-induced toxicity strongly protected from beta-amyloid toxicity. Collectively, these findings imply both NMDA and non-NMDA receptors in excitotoxicity of hippocampal neurons, and suggest that blockade of NMDA receptors alone may not suffice to efficiently abrogate neurodegeneration.'
            ],
            'Annotations': [],
            'Authors': [
              'Valera, Elvira',
              'Fern\u00e1ndez-Salguero, Pedro M',
              'Planells-Cases, Rosa',
              'Messeguer, Angel',
              'Van Den Nest, Wim',
              'Carre\u00f1o, Cristina',
              'Ferrer-Montiel, Antonio',
              'Merino, Jaime M'
            ],
            'Date': '2002',
            'Identifier': [],
            'Journal': [
              'Neuromolecular medicine'
            ],
            'Keywords': [],
            'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/12622405',
            'MeshHeadings': [
              'Amyloid beta-Peptides',
              'Animals',
              'Cells, Cultured',
              'Excitatory Amino Acid Antagonists',
              'Fetus',
              'Glutamic Acid',
              'Glycine',
              'Hippocampus',
              'Neurodegenerative Diseases',
              'Neurons',
              'Neuroprotective Agents',
              'Neurotoxins',
              'Rats',
              'Receptors, N-Methyl-D-Aspartate'
            ],
            'PMID': 12622405,
            'PublicationType': 'Journal Article',
            'Substances': [],
            'Suggest': '',
            'TextminingVersion': '0',
            'Title': 'Neuroprotection against excitotoxicity by N-alkylglycines in rat hippocampal neurons.'
          }
        },
        {
          'Matching': {
            'AnimalTest': 'both',
            'Relevance': 0.93,
            'Similar': false
          },
          'Record': {
            'Abstract': [
              'The neuroprotective activity of basic fibroblast growth factor (bFGF) in combination with the N-methyl-D-aspartate (NMDA) receptor antagonist MK-801 was evaluated in organotypic hippocampal slice cultures. Oxygen/glucose deprivation produced neuronal damage which was assessed using propidium iodide fluorescence. Treatment with increasing doses of bFGF demonstrated significant neuroprotection that was optimal at 10 ng ml-t. This effect was diminished at higher concentrations. MK-801, at the optimal concentration of 30 microM, demonstrated greater neuroprotective efficacy than bFGF. However, bFGF significantly enhanced the protection conferred by MK-801 alone. These results suggest that neurotrophic factors such as bFGF may augment the neuroprotective effects of NMDA antagonists against ischemic neuronal injury.'
            ],
            'Annotations': [],
            'Authors': [
              'Barth, A',
              'Barth, L',
              'Morrison, R S',
              'Newell, D W'
            ],
            'Date': '1996',
            'Identifier': [],
            'Journal': [
              'Neuroreport'
            ],
            'Keywords': [],
            'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/8856698',
            'MeshHeadings': [
              'Animals',
              'Brain Ischemia',
              'Cell Survival',
              'Dizocilpine Maleate',
              'Drug Synergism',
              'Excitatory Amino Acid Antagonists',
              'Fibroblast Growth Factor 2',
              'Hippocampus',
              'Neurons',
              'Neuroprotective Agents',
              'Organ Culture Techniques',
              'Rats',
              'Rats, Sprague-Dawley',
              'Receptors, N-Methyl-D-Aspartate'
            ],
            'PMID': 8856698,
            'PublicationType': 'Journal Article',
            'Substances': [],
            'Suggest': '',
            'TextminingVersion': '0',
            'Title': 'bFGF enhances the protective effects of MK-801 against ischemic neuronal injury in vitro.'
          }
        },
        {
          'Matching': {
            'AnimalTest': 'both',
            'Relevance': 0.92,
            'Similar': false
          },
          'Record': {
            'Abstract': [
              'One of the serious unwanted effects of the anthracycline anticancer drug doxorubicin (Dox, adriamycin) is its neurotoxicity, which can be evoked by the activation of extracellular (FAS/CD95/Apo-1) pathway of apoptosis in cells. Since memantine, a clinically used N-methyl-D: -aspartic acid (NMDA) receptor antagonist, shows antiapoptotic action in several models of neuronal cell damage, in this study we evaluated the effect of memantine on the cell death induced by Dox in primary neuronal cell cultures. First, we investigated the effect of different concentrations of Dox (0.1-5 microM) on mouse neocortical, hippocampal, striatal, and cerebellar neurons on 7- and 12-day in vitro (DIV). The 7 DIV neuronal cell cultures were more prone to Dox-induced cell death than 12 DIV cultures. The cerebellar neurons were the most resistant to Dox-induced apoptosis in comparison to neuronal cell cultures derived from the forebrain. Memantine (0.1-2 microM) attenuated the Dox-evoked lactate dehydrogenase release in 7 DIV neuronal cell cultures with no significant effect on 12 DIV cultures. The ameliorating effect of memantine on Dox-mediated cell death was also confirmed by an increase in cell viability measured by 3-(4,5-dimethylthiazol-2-yl)-2,5-diphenyltetrazolium bromide reduction assay. There was no effect of memantine on Dox-induced caspase-8 and -3 activity and Dox-evoked decrease in mitochondrial potential, although attenuation in the number of cells with apoptotic DNA fragmentation was observed. We also showed that the antiapoptotic effect of memantine in our model was NMDA receptor-independent, since two other antagonists of this receptor, MK-801 and AP-5, did not attenuate Dox-induced cell death. Furthermore, memantine did not influence the Dox-evoked increase in cytoplasmic Ca2+ level. The obtained data suggest developmental regulation of both, the Dox-mediated neurotoxicity and efficacy of memantine in alleviating the Dox-induced cell damage in neuronal cell cultures. Moreover, this neuroprotective effect of memantine seems not to be dependent on caspase-3 activity and on the antagonistic action on NMDA receptor.'
            ],
            'Annotations': [],
            'Authors': [
              'Jantas, D',
              'Lason, W'
            ],
            'Date': '2009',
            'Identifier': [],
            'Journal': [
              'Neurotoxicity research'
            ],
            'Keywords': [],
            'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/19384585',
            'MeshHeadings': [
              'Analysis of Variance',
              'Animals',
              'Antibiotics, Antineoplastic',
              'Brain',
              'Calcium',
              'Caspase 3',
              'Caspase 8',
              'Cell Survival',
              'Cells, Cultured',
              'Cysteine Proteinase Inhibitors',
              'Dose-Response Relationship, Drug',
              'Doxorubicin',
              'Embryo, Mammalian',
              'Excitatory Amino Acid Antagonists',
              'L-Lactate Dehydrogenase',
              'Memantine',
              'Mice',
              'Neurons',
              'Neuroprotective Agents',
              'Oligopeptides',
              'Reactive Oxygen Species',
              'Tetrazolium Salts',
              'Thiazoles',
              'Time Factors'
            ],
            'PMID': 19384585,
            'PublicationType': 'Journal Article',
            'Substances': [],
            'Suggest': '',
            'TextminingVersion': '0',
            'Title': 'Protective effect of memantine against Doxorubicin toxicity in primary neuronal cell cultures: influence a development stage.'
          }
        },
        {
          'Matching': {
            'AnimalTest': 'both',
            'Relevance': 0.91,
            'Similar': false
          },
          'Record': {
            'Abstract': [
              'Organotypic hippocampal slice cultures represent a feasible model for studies of cerebral ischemia and the role of ionotropic glutamate receptors in oxygen-glucose deprivation-induced neurodegeneration. New results and a review of existing data are presented in the first part of this paper. The role of glutamate transporters, with special reference to recent results on inhibition of glutamate transporters under normal and energy-failure (ischemia-like) conditions is reviewed in the last part of the paper. The experimental work is based on hippocampal slice cultures derived from 7 day old rats and grown for about 3 weeks. In such cultures we investigated the subfield neuronal susceptibility to oxygen-glucose deprivation, the type of induced cell death and the involvement of ionotropic glutamate receptors. Hippocampal slice cultures were also used in our studies on glutamate transporters reviewed in the last part of this paper. Neurodegeneration was monitored and/or shown by cellular uptake of propidium iodide, loss of immunocytochemical staining for microtubule-associated protein 2 and staining with Fluoro-Jade B. To distinguish between necrotic vs. apoptotic neuronal cell death we used immunocytochemical staining for active caspase-3 (apoptosis indicator) and Hoechst 33342 staining of nuclear chromatin. Our experimental studies on oxygen-glucose deprivation confirmed that CA1 pyramidal cells were the most susceptible to this ischemia-like condition. Judged by propidium iodide uptake, a selective CA1 lesion, with only minor affection on CA3, occurred in cultures exposed to oxygen-glucose deprivation for 30 min. Nuclear chromatin staining by Hoechst 33342 and staining for active caspase-3 showed that oxygen-glucose deprivation induced necrotic cell death only. Addition of 10 microM of the N-methyl-D-aspartate glutamate receptor antagonist MK-801, and 20 microM of the non-N-methyl-D-aspartate glutamate receptor antagonist 2,3-dihyroxy-6-nitro-7-sulfamoyl-benzo(F)quinoxaline to the culture medium confirmed that both N-methyl-D-aspartate and non-N-methyl-D-aspartate ionotropic glutamate receptors were involved in the oxygen-glucose deprivation-induced cell death. Glutamate is normally quickly removed, from the extracellular space by sodium-dependent glutamate transporters. Effects of blocking the transporters by addition of the DL-threo-beta-benzyloxyaspartate are reviewed in the last part of the paper. Under normal conditions addition of DL-threo-beta-benzyloxyaspartate in concentrations of 25 microM or more to otherwise untreated hippocampal slice cultures induced neuronal cell death, which was prevented by addition of 2,3-dihyroxy-6-nitro-7-sulfamoyl-benzo(F)quinoxaline and MK-801. In energy failure situations, like cerebral ischemia and oxygen-glucose deprivation, the transporters are believed to reverse and release glutamate to the extracellular space. Blockade of the transporters by a subtoxic (10 microM) dose of DL-threo-beta-benzyloxyaspartate during oxygen-glucose deprivation (but not during the next 48 h after oxygen-glucose deprivation) significantly reduced the oxygen-glucose deprivation-induced propidium iodide uptake, suggesting a neuroprotective inhibition of reverse transporter activity by DL-threo-beta-benzyloxyaspartate during oxygen-glucose deprivation under these conditions. Adding to this, other results from our laboratory have demonstrated that pre-treatment of the slice cultures with glial cell-line derived neurotrophic factor upregulates glutamate transporters. As a logical, but in some glial cell-line derived neurotrophic factor therapy-related conditions clearly unwanted consequence the susceptibility for oxygen-glucose deprivation-induced glutamate receptor-mediated cell death is increased after glial cell-line derived neurotrophic factor treatment. In summary, we conclude that both ionotropic glutamate receptors and glutamate transporters are involved in oxygen-glucose deprivation-induced necrotic cell death in hippocampal slice cultures, which have proven to be a feasible tool in experimental studies on this topic.'
            ],
            'Annotations': [],
            'Authors': [
              'Bonde, C',
              'Noraberg, J',
              'Noer, H',
              'Zimmer, J'
            ],
            'Date': '2005',
            'Identifier': [],
            'Journal': [
              'Neuroscience'
            ],
            'Keywords': [],
            'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/16344151',
            'MeshHeadings': [
              'Amino Acid Transport System X-AG',
              'Analysis of Variance',
              'Animals',
              'Animals, Newborn',
              'Aspartic Acid',
              'Cell Death',
              'Dizocilpine Maleate',
              'Dose-Response Relationship, Drug',
              'Drug Interactions',
              'Excitatory Amino Acid Antagonists',
              'Excitatory Amino Acid Transporter 1',
              'Excitatory Amino Acid Transporter 2',
              'Glial Fibrillary Acidic Protein',
              'Glucose',
              'Hippocampus',
              'Histocytochemistry',
              'Hypoxia',
              'Immunohistochemistry',
              'In Vitro Techniques',
              'Microtubule-Associated Proteins',
              'Necrosis',
              'Neurofilament Proteins',
              'Neurons',
              'Neuroprotective Agents',
              'Propidium',
              'Quinoxalines',
              'Rats',
              'Receptors, Glutamate',
              'Time Factors'
            ],
            'PMID': 16344151,
            'PublicationType': 'Comparative Study',
            'Substances': [],
            'Suggest': '',
            'TextminingVersion': '0',
            'Title': 'Ionotropic glutamate receptors and glutamate transporters are involved in necrotic neuronal cell death induced by oxygen-glucose deprivation of hippocampal slice cultures.'
          }
        },
        {
          'Matching': {
            'AnimalTest': 'both',
            'Relevance': 0.9,
            'Similar': false
          },
          'Record': {
            'Abstract': [
              'There is great interest in testing neuroprotectants which inhibit the neurodegeneration that results from excessive activation of N-methyl-D-aspartate (NMDA) receptors. As an alternative to in vivo testing in animal models, we demonstrate here the use of a complex in vitro model to compare the efficacy and toxicity of NMDA receptor inhibitors. Organotypic hippocampal slice cultures were used to compare the effectiveness of the Alzheimer\'s disease drug, memantine, the Parkinson\'s disease drug, procyclidine, and the novel neuroprotectant, gacyclidine (GK11), against NMDA-induced toxicity. All three drugs are non-competitive NMDA receptor open-channel blockers that inhibit excitotoxic injury, and their neuroprotective capacities have been extensively investigated in vivo in animal models. They have also been evaluated as potential countermeasure agents against organophosphate poisoning. Quantitative densitometric image analysis of propidium iodide uptake in hippocampal regions CA1, CA3 and DG, showed that, after exposure to 10microM NMDA for 24 hours, GK11 was the most potent of the three drugs, with an IC50 of about 50nM and complete protection at 250nM. When applied at high doses, GK11 was still the more potent neuroprotectant, and also the least cytotoxic. These findings are consistent with those from in vivo tests in rodents. We conclude that the slice culture model provides valuable pre-clinical data, and that applying the model to the screening of neuroprotectants might significantly limit the use of in vivo tests in animals.'
            ],
            'Annotations': [],
            'Authors': [
              'Ring, Avi',
              'Tanso, Rita',
              'Noraberg, Jens'
            ],
            'Date': '2010',
            'Identifier': [],
            'Journal': [
              'Alternatives to laboratory animals : ATLA'
            ],
            'Keywords': [],
            'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/20377305',
            'MeshHeadings': [
              'Animals',
              'Clinical Trials as Topic',
              'Cyclohexenes',
              'Excitatory Amino Acid Antagonists',
              'Hippocampus',
              'In Vitro Techniques',
              'Neuroprotective Agents',
              'Piperidines',
              'Propidium',
              'Rats',
              'Rats, Wistar',
              'Receptors, N-Methyl-D-Aspartate'
            ],
            'PMID': 20377305,
            'PublicationType': 'Journal Article',
            'Substances': [],
            'Suggest': '',
            'TextminingVersion': '0',
            'Title': 'The use of organotypic hippocampal slice cultures to evaluate protection by non-competitive NMDA receptor antagonists against excitotoxicity.'
          }
        },
        {
          'Matching': {
            'AnimalTest': 'both',
            'Relevance': 0.89,
            'Similar': false
          },
          'Record': {
            'Abstract': [
              'Glutamate is the main excitatory neurotransmitter in the mammalian nervous system and is essential for its normal functions. However, overstimulation of glutamatergic system due to hyperactivation of NMDA receptors and/or impairment of glutamate reuptake system has been implicated in many acute and chronic neurological diseases. Regulation of extracellular glutamate concentrations relies on the function of glutamate transporters which can be reversed in situations related to excitotoxicity. Guanosine-5\'-monophosphate (GMP), a guanine nucleotide which displays important extracellular roles, such as trophic effects to neurons and astrocytes, behaves as antagonist of glutamate receptors and is neuroprotective in hippocampal slices against excitotoxicity or ischemic conditions. Hippocampal slices exposed to 1 or 10 mM glutamate, or 100 microM NMDA with 10 microM glycine for 1 h and evaluated after 6 or 18 h, showed reduced cell viability and DNA fragmentation, respectively. Glutamate- or NMDA-induced cell death was prevented by 50 microM MK-801, but only NMDA-induced cell damage was prevented by GMP (1 mM). Glutamate-induced cell viability impairment and glutamate-induced l-[(3)H]glutamate release were both prevented by adding DL-TBOA (10 microM). Otherwise, NMDA-induced cell viability loss was not prevented by 10 microM of DL-TBOA and NMDA did not induce l-[(3)H]glutamate release. Our results demonstrate that GMP is neuroprotective when acting selectively at NMDA receptors. Glutamate-induced hippocampal slice damage and glutamate release were blocked by glutamate transporter inhibitor, indicating that glutamate-induced toxicity also involves the reversal of glutamate uptake, which cannot be prevented by GMP.'
            ],
            'Annotations': [],
            'Authors': [
              'Molz, Simone',
              'Tharine, Dal-Cim',
              'Decker, Helena',
              'Tasca, Carla I'
            ],
            'Date': '2008',
            'Identifier': [],
            'Journal': [
              'Brain research'
            ],
            'Keywords': [],
            'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/18655777',
            'MeshHeadings': [
              'Animals',
              'Aspartic Acid',
              'Brain Diseases, Metabolic',
              'Cell Survival',
              'DNA Fragmentation',
              'Dose-Response Relationship, Drug',
              'Excitatory Amino Acid Agonists',
              'Excitatory Amino Acid Antagonists',
              'Glutamic Acid',
              'Guanosine Monophosphate',
              'Hippocampus',
              'Male',
              'N-Methylaspartate',
              'Neuroprotective Agents',
              'Neurotoxins',
              'Organ Culture Techniques',
              'Rats',
              'Rats, Wistar',
              'Receptors, N-Methyl-D-Aspartate',
              'Vesicular Glutamate Transport Proteins'
            ],
            'PMID': 18655777,
            'PublicationType': 'Journal Article',
            'Substances': [],
            'Suggest': '',
            'TextminingVersion': '0',
            'Title': 'GMP prevents excitotoxicity mediated by NMDA receptor activation but not by reversal activity of glutamate transporters in rat hippocampal slices.'
          }
        },
        {
          'Matching': {
            'AnimalTest': 'both',
            'Relevance': 0.88,
            'Similar': false
          },
          'Record': {
            'Abstract': [
              'Tosyl-polyamine derivatives such as N-{4-[4-(guanidinobutylamino)-butylamino]butyl}-4-methylbenzenesulfonamide trihydrochroride (TsHSPMG) have been found to strongly inhibit macroscopic currents through heteromeric N-methyl-D-aspartate (NMDA) receptors (NR1/NR2A, NR1/NR2B) and Ca(2+)-permeable alpha-amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid (homomeric glutamate receptor 1) receptors expressed in Xenopus laevis oocytes on voltage-clamp recording. In the present study, it was found that the inhibition of NMDA receptor activity induced by tosyl-polyamine derivatives was voltage-dependent. Some mutations located in the intracellular region of the channel pore, such as NR1 E621Q and NR2B W607L, reduced the inhibition by tosyl-polyamine derivatives, suggesting that tosyl-polyamine derivatives penetrate deeply into the channel pore of NMDA receptors. The neuroprotective effects of tosyl-polyamine derivatives against cell injury caused by NMDA were investigated in cultured rat hippocampal neurons. Addition of 1 microM TsHSPMG to medium ablated the neurotoxicity induced by NMDA, and a similar effect was observed with 30 microM memantine. The neuroprotective effects of tosyl-polyamine derivatives on NMDA-induced seizures in mice were also assayed. Intracerebroventricular or intravenous injection of TsHSPMG (0.1 or 0.5 mg/kg) decreased the seizures induced by intraperitoneal injection of NMDA in mice. These findings indicate that tosyl-polyamine derivatives exhibit neuroprotective effects not only in primary cultured neurons but also in mice.'
            ],
            'Annotations': [],
            'Authors': [
              'Masuko, Takashi',
              'Namiki, Rie',
              'Nemoto, Yuta',
              'Miyake, Muneharu',
              'Kizawa, Yasuo',
              'Suzuki, Toyofumi',
              'Kashiwagi, Keiko',
              'Igarashi, Kazuei',
              'Kusama, Tadashi'
            ],
            'Date': '2009',
            'Identifier': [],
            'Journal': [
              'The Journal of pharmacology and experimental therapeutics'
            ],
            'Keywords': [],
            'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/19644042',
            'MeshHeadings': [
              'Animals',
              'Anthraquinones',
              'Cell Line, Tumor',
              'Cells, Cultured',
              'Cloning, Molecular',
              'Dansyl Compounds',
              'Electrophysiology',
              'Excitatory Amino Acid Agonists',
              'Excitatory Amino Acid Antagonists',
              'Female',
              'Hippocampus',
              'Humans',
              'Mice',
              'N-Methylaspartate',
              'Neuroblastoma',
              'Neurons',
              'Neuroprotective Agents',
              'Oocytes',
              'Patch-Clamp Techniques',
              'Polyamines',
              'Pregnancy',
              'Rats',
              'Receptors, AMPA',
              'Receptors, Glutamate',
              'Receptors, N-Methyl-D-Aspartate',
              'Seizures',
              'Spermine',
              'Tosyl Compounds',
              'Xenopus laevis'
            ],
            'PMID': 19644042,
            'PublicationType': 'Journal Article',
            'Substances': [],
            'Suggest': '',
            'TextminingVersion': '0',
            'Title': 'Neuroprotection by tosyl-polyamine derivatives through the inhibition of ionotropic glutamate receptors.'
          }
        }
      ]
    };
    return example;
  }

  private exampleOriginData(): Origin {
    const example: Origin = {
      'Abstract': [
        'This study investigated whether memantine, a non-competitive NMDA receptor antagonist is neuroprotective after traumatic brain injury (TBI) induced in adult rats with a controlled cortical impact device. TBI led to significant neuronal death in the hippocampal CA2 and CA3 regions (by 50 and 59%, respectively), by 7 days after the injury. Treatment of rats with memantine (10 and 20 mg/Kg, i.p.) immediately after the injury significantly prevented the neuronal loss in both CA2 and CA3 regions. This is the first study showing the neuroprotective potential of memantine to prevent the TBI-induced neuronal damage.'
      ],
      'Annotations': [],
      'Authors': [
        'Rao, V L',
        'Dogan, A',
        'Todd, K G',
        'Bowen, K K',
        'Dempsey, R J'
      ],
      'Date': '2001',
      'Identifier': [],
      'Journal': [
        'Brain research'
      ],
      'Keywords': [],
      'Link': 'https://www.ncbi.nlm.nih.gov/pubmed/11489449',
      'MeshHeadings': [
        'Animals',
        'Brain Injuries',
        'Dose-Response Relationship, Drug',
        'Excitatory Amino Acid Antagonists',
        'Hippocampus',
        'Male',
        'Memantine',
        'Nerve Degeneration',
        'Neurons',
        'Neuroprotective Agents',
        'Rats',
        'Rats, Sprague-Dawley',
        'Receptors, N-Methyl-D-Aspartate'
      ],
      'PMID': 11489449,
      'PublicationType': 'Journal Article',
      'Substances': [],
      'Suggest': '',
      'TextminingVersion': '0',
      'Title': 'Neuroprotection by memantine, a non-competitive NMDA receptor antagonist after traumatic brain injury in rats.'
    };
    return example;
  }

}
