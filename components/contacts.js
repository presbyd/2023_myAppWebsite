const contacts = [
    {
        id: 18,
        name: "Phenotypic and Genetic Characteristics of Retinal Vascular Parameters and their Association with Diseases",
        year: 2023,
        imgURL: "/images/retina_multrait.png",
        link: "https://www.medrxiv.org/content/10.1101/2023.07.07.23292368v1",
        aut: "Middle author",
        descr: "Developed state-of-the-art methods to extract explainable features from retinal fundus images. Further assessed associations of these features with disease progression and genetic heritability."
    },   
    {
        id: 17,
        name: "Baseline Sleep Characteristics in NCAA Division I Collegiate Athletes",
        year: 2024,
        imgURL: "/images/ucla.png",
        link: "https://journals.lww.com/cjsportsmed/abstract/9900/baseline_sleep_characteristics_in_ncaa_division_i.171.aspx",
        aut: "Middle author",
        descr: "Characterised the sleep patterns of Division 1 athletes."
    },   
    {
        id: 16,
        name: "Wearable-derived maternal heart rate variability as a novel digital biomarker of preterm birth",
        year: 2024,
        imgURL: "/images/term_births.png",
        link: "",
        aut: "Middle author",
        descr: "Found a pattern in heart rate variability throughout pregnancy that predicted the time until birth."
    },   
    {
        id: 15,
        name: "Connection Between Sleep and Psychological Well-Being in U.S. Army Soldiers",
        year: 2024,
        imgURL: "/images/mil_med.png",
        link: "https://academic.oup.com/milmed/article/189/1-2/e40/7189626#google_vignette",
        aut: "Middle author",
        descr: "Performed longitudinal examination of sleeping behaviors of US army soldiers stationed in Alaska and the associations of these sleep behaviors with mental health and performance."
    },   
    {
        id: 14,
        name: "Pre-sleep feeding, sleep quality, and markers of recovery in division I NCAA female soccer players",
        year: 2023,
        imgURL: "/images/sleep_feeding.jpeg",
        link: "https://www.tandfonline.com/doi/full/10.1080/15502783.2023.2236055",
        aut: "Middle author",
        descr: "Characterised feeding patterns in Division 1 soccer players and how these eating patterns may impact sleep."
    },   
    {
        id: 13,
        name: "Wearable derived cardiovascular responses to stressors in free-living conditions",
        year: 2023,
        imgURL: "/images/circadian_stress.png",
        link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0285332",
        aut: "First author",
        descr: "Developed and validated methods to assess stress levels in free-living individuals wearing a wearable device."
    },   
    {
        id: 1,
        name: "Biometrics from a wearable device reveal temporary effects of COVID-19 vaccines on cardiovascular, respiratory, and sleep physiology",
        year: 2022,
        imgURL: "/images/vac.jpg",
        link: "https://journals.physiology.org/doi/full/10.1152/japplphysiol.00420.2021",
        aut: "First author",
        descr: "Characterized the physiological response to COVID vaccination and found that vaccinates acutely impact cardiovascular physiology for ~1 night."
    },    
    {
        id: 2,
        name: "Lipoprotein Lipase Overexpression in Skeletal Muscle Attenuates Weight Regain by Potentiating Energy Expenditure",
        year: 2021,
        imgURL: "/images/lpl.jpg",
        link: "https://diabetesjournals.org/diabetes/article/70/4/867/39369/Lipoprotein-Lipase-Overexpression-in-Skeletal",
        aut: "First Author",
        descr: "Characterized muscle-specific transcriptomic response to weight loss and found that skeletal muscle lipoprotein lipase expression plays a critical role in regulating energy expenditure during weight regain."
    },
    {
        id: 3,
        name: "Neonatal intake of Omega-3 fatty acids enhances lipid oxidation in adipocyte precursors",
        year: 2022,
        imgURL: "/images/scell_n3pufa.jpeg",
        link: "https://journals.physiology.org/doi/full/10.1152/japplphysiol.00420.2021",
        aut: "Middle Author",
        descr: "Characterized the adipocyte-specific response to high omega-3 fatty acid intake during early life using metabolomics, proteomics, and single cell RNA-sequencing and found candidate transcription factors that may establish early-life cellular changes that confer life-long benefits of early life omega-3 intake."
    },
    {
        id: 4,
        name: "Diverse signaling by TGFβ isoforms in response to focal injury is associated with either retinal regeneration or reactive gliosis",
        year: 2021,
        imgURL: "/images/divTGFB.jpg",
        link: "https://link.springer.com/article/10.1007/s10571-020-00830-5",
        aut: "Middle Author",
        descr: "Determined cell- and species-specific differences in recovering from eye damage and discovered novel pathway that may be therapeutically targeted to help restore eyesight."
    },
    {
        id: 5,
        name: "Sex differences in the effect of diet, obesity, and exercise on bone quality and fracture toughness",
        year: 2021,
        imgURL: "/images/boneSexDif.jpg",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S8756328221000028",
        aut: "Middle Author",
        descr: "Assessed effect of diet and exercise on bone health."
    },
    {
        id: 6,
        name: "Compensatory eating behaviors in male and female rats in response to exercise training",
        year: 2020,
        imgURL: "/images/sexDiffEx.gif",
        link: "https://journals.physiology.org/doi/full/10.1152/ajpregu.00259.2019",
        aut: "Middle Author",
        descr: "Characterized the sex-specific responses to exercise and found that females may have greater difficulty in losing weight with exercise due to compensatory food intake."
    },
    {
        id: 7,
        name: "Impact of exercise and activity on weight regain and musculoskeletal health postOVX",
        year: 2019,
        imgURL: "/images/weightPostOVX.jpg",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7194137/",
        aut: "Middle Author",
        descr: "Found that exercise may not prevent weight gain that occurs with menopause."
    },
    {
        id: 8,
        name: "Regular exercise potentiates energetically expensive hepatic de novo lipogenesis during early weight regain",
        year: 2019,
        imgURL: "/images/exerciseDNL.jpg",
        link: "",
        aut: "First Author",
        descr: "Found that exercise potentiates hepatic de novo lipogensis during overfeeding, which may explain the increased thermic effect of food observed with exercise."
    },
    {
        id: 9,
        name: "Compensation for cold-induced thermogenesis during weight loss maintenance and regain",
        year: 2019,
        imgURL: "/images/ICE_wlwr.jpg",
        link: "https://journals.physiology.org/doi/full/10.1152/ajpendo.00543.2018",
        aut: "First Author",
        descr: "Found that energy expended during cold does not lead to an increase in total daily energy expenditure due to compensatory behaviors that reduce physical activity."
    },
    {
        id: 10,
        name: "Is regular exercise an effective strategy for weight loss maintenance?",
        year: 2018,
        imgURL: "/images/is_ex_eff.jpg",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0031938418300337",
        aut: "Middle Author",
        descr: "Reviewed the efficacy of exercise to promote and maintain weight loss."
    },
    {
        id: 11,
        name: "Low Neonatal Plasma n-6/n-3 PUFA Ratios Regulate Offspring Adipogenic Potential and Condition Adult Obesity Resistance",
        year: 2018,
        imgURL: "/images/n3lact.jpg",
        link: "https://diabetesjournals.org/diabetes/article/67/4/651/39964/Low-Neonatal-Plasma-n-6-n-3-PUFA-Ratios-Regulate",
        aut: "Middle Author",
        descr: "Found that genetically altering lactating mothers to produce higher levels of n-3 fatty acids confers benefits to the offspring that last a lifetime."
    },
    {
        id: 12,
        name: "Prior weight loss exacerbates the biological drive to gain weight after the loss of ovarian function",
        year: 2017,
        imgURL: "/images/menopause_wlwr.jpg",
        link: "https://physoc.onlinelibrary.wiley.com/doi/full/10.14814/phy2.13272",
        aut: "Middle Author",
        descr: "Weight loss before menopause may lead to accelerated weight gain during menopause."
    }
    // {
    //     id: 11,
    //     name: "",
    //     year: 2019,
    //     imgURL: "/images/.jpg",
    //     link: "",
    //     aut: "",
    //     descr: ""
    // },
    // {
    //     id: 11,
    //     name: "",
    //     year: 2019,
    //     imgURL: "/images/.jpg",
    //     link: "",
    //     aut: "",
    //     descr: ""
    // }
];

export default contacts;

// {
//     id: 4,
//         name: "",
//             year: ,
//     imgURL: "/images/.jpg",
//         link: "",
//             aut: "",
//                 descr: ""
// }