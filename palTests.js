// palTests.js
export const palTests = [
   {
        "id": 1,
        "category": "Hematology",
        "name": "Haemoglobin Estimation",
        "price": 3000,
        "image": "./images/HGB.webp",
        "duration": "Same-Day Analysis (2–3 Hours)",
        "who_its_for": "Individuals with suspected anemia, fatigue, or general health assessment.",
        "description": "Measures the amount of hemoglobin in the blood to detect anemia or other blood-related conditions.",
        "symptoms_related_to_test": "Fatigue, dizziness, pale skin, shortness of breath.",
        "result_interpretation": {
            "positive": "Low hemoglobin indicates anemia or blood loss.",
            "negative": "Normal levels suggest healthy red blood cell production."
        },
        "features": [
            "Quick anemia screening",
            "Part of routine blood tests",
            "Helps monitor chronic diseases"
        ],
        "insight_and_action_plan": {
            "next_steps": "If low, investigate possible causes such as iron deficiency or chronic disease.",
            "prevention_tip": "Eat iron-rich foods like red meat, beans, and leafy vegetables."
        }
    },
    {
        "id": 2,
        "category": "Hematology",
        "name": "Packed Cell Volume (PCV)",
        "price": 2500,
        "image": "./images/PCV.webp",
        "duration": "Same-Day Analysis (2–3 Hours)",
        "who_its_for": "Patients undergoing anemia or dehydration checks.",
        "description": "Determines the percentage of red blood cells in blood to assess anemia, dehydration, or blood loss.",
        "symptoms_related_to_test": "Weakness, dizziness, or unusual fatigue.",
        "result_interpretation": {
            "positive": "Low PCV indicates anemia or overhydration.",
            "negative": "Normal PCV indicates balanced red cell volume."
        },
        "features": [
            "Evaluates blood concentration",
            "Used in anemia diagnosis",
            "Supports overall blood assessment"
        ],
        "insight_and_action_plan": {
            "next_steps": "Consult your physician if values are abnormal; further iron or hydration assessment may be needed.",
            "prevention_tip": "Stay hydrated and maintain a balanced diet rich in iron and vitamins."
        }
    },
    {
        "id": 3,
        "category": "Microbiology/Infectious Disease",
        "name": "Malaria Parasite Test",
        "price": 4000,
        "image": "./images/MPT.webp",
        "duration": "Same-Day (1–2 Hours)",
        "who_its_for": "Anyone with fever, chills, or malaria symptoms.",
        "description": "Detects malaria parasites in blood samples to confirm malaria infection.",
        "symptoms_related_to_test": "Fever, chills, headache, sweating, body aches.",
        "result_interpretation": {
            "positive": "Indicates malaria infection; treatment required immediately.",
            "negative": "No malaria parasites detected."
        },
        "features": [
            "Rapid malaria detection",
            "Accurate identification of parasite species",
            "Helps guide treatment decisions"
        ],
        "insight_and_action_plan": {
            "next_steps": "If positive, begin antimalarial treatment as prescribed by your doctor.",
            "prevention_tip": "Use mosquito nets, repellents, and eliminate standing water."
        }
    },
    {
        "id": 4,
        "category": "Microbiology/Infectious Disease",
        "name": "Widal Agglutination Test",
        "price": 5000,
        "image": "./images/WAT.webp",
        "duration": "Same-Day (3–5 Hours)",
        "who_its_for": "Patients with prolonged fever or suspected typhoid infection.",
        "description": "Detects antibodies against Salmonella typhi and paratyphi, the bacteria causing typhoid fever.",
        "symptoms_related_to_test": "Fever, abdominal pain, weakness, diarrhea or constipation.",
        "result_interpretation": {
            "positive": "Suggests possible typhoid infection; confirm with culture if needed.",
            "negative": "No significant antibodies detected."
        },
        "features": [
            "Screens for typhoid fever",
            "Helps guide antibiotic treatment",
            "Useful in endemic regions"
        ],
        "insight_and_action_plan": {
            "next_steps": "If positive, confirm with blood culture and start appropriate antibiotics.",
            "prevention_tip": "Ensure clean drinking water and proper food hygiene."
        }
    },
    {
        "id": 5,
        "category": "Urine Tests (Non-Microbiology)",
        "name": "Urine Chemistry",
        "price": 4000,
        "image": "./images/UC.webp",
        "duration": "Same-Day (2 Hours)",
        "who_its_for": "Individuals undergoing kidney or metabolic screening.",
        "description": "Analyzes urine for substances like glucose, protein, ketones, and bilirubin to assess kidney and metabolic health.",
        "symptoms_related_to_test": "Frequent urination, foamy urine, or suspected diabetes.",
        "result_interpretation": {
            "positive": "Abnormal findings may indicate diabetes, liver disease, or kidney issues.",
            "negative": "Normal urine chemistry indicates healthy organ function."
        },
        "features": [
            "Detects chemical abnormalities in urine",
            "Assesses kidney and metabolic function",
            "Non-invasive test"
        ],
        "insight_and_action_plan": {
            "next_steps": "Consult your physician for further tests if abnormal values appear.",
            "prevention_tip": "Stay hydrated and manage blood sugar levels."
        }
    },
    {
        "id": 6,
        "category": "Urine Tests (Non-Microbiology)",
        "name": "Computer Assisted Urine Microscopy",
        "price": 2500,
        "image": "./images/CAURM.webp",
        "duration": "Same-Day (2–3 Hours)",
        "who_its_for": "Patients with urinary tract symptoms or kidney disease.",
        "description": "Automated microscopic analysis to detect cells, bacteria, and crystals in urine.",
        "symptoms_related_to_test": "Burning sensation while urinating, flank pain, cloudy urine.",
        "result_interpretation": {
            "positive": "Presence of cells or bacteria suggests infection or kidney disorder.",
            "negative": "Normal result indicates healthy urinary tract."
        },
        "features": [
            "Accurate urine microscopy via automation",
            "Detects infections and kidney issues",
            "Fast and precise results"
        ],
        "insight_and_action_plan": {
            "next_steps": "If infection is detected, consult your doctor for antibiotics.",
            "prevention_tip": "Drink plenty of water and maintain good hygiene."
        }
    },
    {
        "id": 7,
        "category": "Hematology",
        "name": "Erythrocyte Basic",
        "price": 8500,
        "image": "./images/ERYBAS.webp",
        "duration": "Same-Day (3–4 Hours)",
        "who_its_for": "Individuals with blood disorders or suspected anemia.",
        "description": "Assesses red blood cell morphology and count to detect anemia and related disorders.",
        "symptoms_related_to_test": "Fatigue, weakness, pale skin, and breathlessness.",
        "result_interpretation": {
            "positive": "Abnormal red cell shape or count may indicate anemia or blood disorder.",
            "negative": "Normal red cell levels suggest healthy blood function."
        },
        "features": [
            "Comprehensive red cell analysis",
            "Helps identify anemia and hemoglobinopathies"
        ],
        "insight_and_action_plan": {
            "next_steps": "Consult a hematologist if abnormalities are present.",
            "prevention_tip": "Eat iron and vitamin B-rich foods."
        }
    },
    {
        "id": 8,
        "category": "Hematology",
        "name": "Full Blood Count (FBC)",
        "price": 6000,
        "image": "./images/FBC.webp",
        "duration": "Same-Day (3 Hours)",
        "who_its_for": "General health check or patients with infection or fatigue.",
        "description": "Comprehensive test analyzing red cells, white cells, and platelets to assess overall blood health.",
        "symptoms_related_to_test": "Fatigue, infections, or weakness.",
        "result_interpretation": {
            "positive": "Abnormal values indicate possible infection, anemia, or immune disorder.",
            "negative": "Normal results indicate balanced blood function."
        },
        "features": [
            "Comprehensive blood screening",
            "Helps detect infections and anemia",
            "Monitors treatment progress"
        ],
        "insight_and_action_plan": {
            "next_steps": "If abnormalities occur, perform follow-up diagnostic tests.",
            "prevention_tip": "Maintain a balanced diet and regular medical checkups."
        }
    },
    {
        "id": 9,
        "category": "Hematology",
        "name": "Complete Blood Study",
        "price": 20500,
        "image": "./images/CBS.webp",
        "duration": "Next-Day (6–8 Hours)",
        "who_its_for": "Patients requiring detailed hematologic analysis.",
        "description": "A detailed analysis covering red cells, white cells, platelets, and hemoglobin parameters.",
        "symptoms_related_to_test": "Chronic fatigue, bleeding issues, or recurrent infections.",
        "result_interpretation": {
            "positive": "Abnormalities point to specific blood disorders.",
            "negative": "All parameters within normal range."
        },
        "features": [
            "In-depth hematology profiling",
            "Detects hidden or complex blood diseases"
        ],
        "insight_and_action_plan": {
            "next_steps": "Follow up with hematology consultation if results are abnormal.",
            "prevention_tip": "Maintain a nutrient-rich diet and avoid toxins."
        }
    },
    {
        "id": 10,
        "category": "Gastrointestinal",
        "name": "Stool Analysis",
        "price": 4000,
        "image": "./images/SA.webp",
        "duration": "Same-Day (3–4 Hours)",
        "who_its_for": "Individuals with digestive issues or suspected intestinal infections.",
        "description": "Analyzes stool for parasites, blood, and microorganisms to diagnose infections or GI disorders.",
        "symptoms_related_to_test": "Diarrhea, abdominal pain, or visible worms in stool.",
        "result_interpretation": {
            "positive": "Presence of parasites or bacteria confirms infection.",
            "negative": "No abnormal findings detected."
        },
        "features": [
            "Detects intestinal infections",
            "Evaluates digestive health"
        ],
        "insight_and_action_plan": {
            "next_steps": "If positive, begin antiparasitic or antibiotic treatment.",
            "prevention_tip": "Maintain good sanitation and wash fruits before eating."
        }
    },
    {
        "id": 11,
        "category": "Microbiology/Infectious Disease",
        "name": "Skin Snip",
        "price": 6000,
        "image": "./images/SSN.webp",
        "duration": "Next-Day (6–8 Hours)",
        "who_its_for": "Individuals in regions endemic for onchocerciasis (river blindness) or with persistent skin itching and nodules.",
        "description": "A diagnostic procedure to detect the presence of microfilariae in the skin, typically used for onchocerciasis testing.",
        "symptoms_related_to_test": "Severe itching, skin nodules, rashes, or vision problems.",
        "result_interpretation": {
            "positive": "Indicates infection with Onchocerca volvulus (river blindness parasite).",
            "negative": "No microfilariae detected."
        },
        "features": [
            "Detects onchocerciasis infection",
            "Microscopic analysis of skin tissue",
            "Helps confirm filarial diseases"
        ],
        "insight_and_action_plan": {
            "next_steps": "If positive, treatment with ivermectin may be recommended under medical supervision.",
            "prevention_tip": "Avoid blackfly bites near rivers and use insect repellents."
        }
    },
    {
        "id": 12,
        "category": "Microbiology/Infectious Disease",
        "name": "Skin Scraping",
        "price": 6000,
        "image": "./images/SSC.webp",
        "duration": "Same-Day (3–4 Hours)",
        "who_its_for": "Patients with unexplained skin rashes, itching, or suspected fungal/parasite infections.",
        "description": "Examines scraped skin samples under a microscope to detect fungal elements, parasites, or mites.",
        "symptoms_related_to_test": "Scaling, itching, or lesions on skin or scalp.",
        "result_interpretation": {
            "positive": "Confirms fungal or parasitic infection.",
            "negative": "No microorganisms or parasites found."
        },
        "features": [
            "Identifies fungal or scabies infections",
            "Microscopic evaluation",
            "Useful in dermatologic diagnosis"
        ],
        "insight_and_action_plan": {
            "next_steps": "Follow dermatologist’s advice for antifungal or antiparasitic treatment.",
            "prevention_tip": "Maintain good skin hygiene and avoid sharing personal items."
        }
    },
    {
        "id": 13,
        "category": "Hematology",
        "name": "Blood Grouping",
        "price": 3000,
        "image": "./images/BG.webp",
        "duration": "Same-Day (2 Hours)",
        "who_its_for": "Individuals needing blood transfusions, pregnancy checks, or general health screening.",
        "description": "Determines your blood group (A, B, AB, or O) and Rh factor (positive or negative).",
        "symptoms_related_to_test": "Not symptom-based; done before transfusions or pregnancy.",
        "result_interpretation": {
            "positive": "Identifies your blood type and Rh factor accurately.",
            "negative": "N/A (non-diagnostic test)."
        },
        "features": [
            "Essential for transfusion safety",
            "Determines ABO and Rh blood group",
            "Important for pregnancy care"
        ],
        "insight_and_action_plan": {
            "next_steps": "Keep your blood group information handy for medical emergencies.",
            "prevention_tip": "Ensure blood compatibility before any transfusion."
        }
    },
    {
        "id": 14,
        "category": "Hematology",
        "name": "Haemoglobin Genotype",
        "price": 5000,
        "image": "./images/HGBG.webp",
        "duration": "Same-Day (4–5 Hours)",
        "who_its_for": "Individuals checking for sickle cell trait or planning marriage/pregnancy.",
        "description": "Determines your hemoglobin type (AA, AS, SS, etc.) to detect sickle cell traits or disease.",
        "symptoms_related_to_test": "Joint pain, fatigue, or family history of sickle cell anemia.",
        "result_interpretation": {
            "positive": "Identifies carrier (AS) or sickle cell disease (SS).",
            "negative": "AA genotype indicates normal hemoglobin."
        },
        "features": [
            "Identifies hemoglobin variants",
            "Helps in sickle cell prevention and counseling",
            "Essential pre-marital screening test"
        ],
        "insight_and_action_plan": {
            "next_steps": "If AS or SS, seek genetic counseling before marriage or childbirth.",
            "prevention_tip": "Understand compatibility before family planning."
        }
    },
    {
        "id": 15,
        "category": "Hematology",
        "name": "Blood Grouping & Genotype",
        "price": 7500,
        "image": "./images/BG-HGBG.webp",
        "duration": "Same-Day (4–5 Hours)",
        "who_its_for": "Couples planning marriage, blood donors, or pre-surgical patients.",
        "description": "Combines blood grouping and hemoglobin genotype analysis for comprehensive compatibility testing.",
        "symptoms_related_to_test": "Primarily used for compatibility assessment, not symptom-driven.",
        "result_interpretation": {
            "positive": "Identifies both blood type and hemoglobin pattern.",
            "negative": "N/A (non-disease test)."
        },
        "features": [
            "Combines ABO grouping and genotype screening",
            "Useful for pre-marital and transfusion safety",
            "Essential baseline test"
        ],
        "insight_and_action_plan": {
            "next_steps": "Store results securely; important for future health records.",
            "prevention_tip": "Always confirm compatibility before transfusion or marriage."
        }
    },
    {
        "id": 16,
        "category": "Immunology/Serology",
        "name": "Antistreptolysin O (ASO) Titre",
        "price": 8000,
        "image": "./images/ASO-TITRE.webp",
        "duration": "Next-Day (6 Hours)",
        "who_its_for": "Patients suspected of recent streptococcal infection or rheumatic fever.",
        "description": "Detects antibodies produced against streptolysin O toxin from Group A Streptococcus bacteria.",
        "symptoms_related_to_test": "Joint pain, sore throat, or signs of rheumatic fever.",
        "result_interpretation": {
            "positive": "Indicates recent or ongoing streptococcal infection.",
            "negative": "No significant antibody levels detected."
        },
        "features": [
            "Helps diagnose post-streptococcal complications",
            "Supports rheumatic fever evaluation"
        ],
        "insight_and_action_plan": {
            "next_steps": "If positive, consult your doctor for antibiotic therapy or heart screening.",
            "prevention_tip": "Treat sore throats promptly to prevent complications."
        }
    },
    {
        "id": 17,
        "category": "Immunology/Serology",
        "name": "Rheumatoid Factor (RF)",
        "price": 8000,
        "image": "./images/RF.webp",
        "duration": "Next-Day (6 Hours)",
        "who_its_for": "Individuals with chronic joint pain or suspected autoimmune arthritis.",
        "description": "Detects rheumatoid factor antibodies in blood, which may indicate rheumatoid arthritis or other autoimmune diseases.",
        "symptoms_related_to_test": "Joint pain, stiffness, and swelling.",
        "result_interpretation": {
            "positive": "Suggests possible rheumatoid arthritis or related autoimmune condition.",
            "negative": "RF not detected; does not rule out arthritis completely."
        },
        "features": [
            "Assists in diagnosing autoimmune disorders",
            "Common test for rheumatoid arthritis"
        ],
        "insight_and_action_plan": {
            "next_steps": "Consult a rheumatologist for confirmation and management plan.",
            "prevention_tip": "Maintain joint mobility with regular low-impact exercises."
        }
    },
    {
        "id": 18,
        "category": "Microbiology/Infectious Disease",
        "name": "Hepatitis C Virus (HCV) Test",
        "price": 5000,
        "image": "./images/HCV.webp",
        "duration": "Next-Day (6–8 Hours)",
        "who_its_for": "Individuals with liver problems, history of blood transfusion, or unprotected sex.",
        "description": "Detects antibodies to the hepatitis C virus, which causes chronic liver infection.",
        "symptoms_related_to_test": "Fatigue, jaundice, abdominal pain, or elevated liver enzymes.",
        "result_interpretation": {
            "positive": "Indicates exposure to HCV; confirm with RNA test.",
            "negative": "No HCV antibodies detected."
        },
        "features": [
            "Screens for hepatitis C infection",
            "Essential for blood donors and health screening"
        ],
        "insight_and_action_plan": {
            "next_steps": "If positive, further viral load and liver tests are required.",
            "prevention_tip": "Avoid sharing needles and practice safe sex."
        }
    },
    {
        "id": 19,
        "category": "Immunology/Serology",
        "name": "Venereal Disease Research Lab (VDRL)",
        "price": 4000,
        "image": "./images/VDRL.webp",
        "duration": "Same-Day (4 Hours)",
        "who_its_for": "Individuals with possible sexually transmitted infections or for premarital screening.",
        "description": "Screens for syphilis by detecting antibodies produced in response to Treponema pallidum infection.",
        "symptoms_related_to_test": "Genital sores, rashes, or unexplained fever.",
        "result_interpretation": {
            "positive": "Suggests active or past syphilis infection; confirm with treponemal test.",
            "negative": "No syphilis antibodies detected."
        },
        "features": [
            "Early detection of syphilis infection",
            "Quick and inexpensive screening test"
        ],
        "insight_and_action_plan": {
            "next_steps": "Confirm positive results and begin antibiotic therapy.",
            "prevention_tip": "Practice safe sex and get tested regularly."
        }
    },
    {
        "id": 20,
        "category": "Immunology/Serology",
        "name": "Hepatitis B Virus (HBV) Test",
        "price": 4000,
        "image": "./images/HEP-B.webp",
        "duration": "Next-Day (6–8 Hours)",
        "who_its_for": "Individuals with liver disease symptoms or at risk of viral infection.",
        "description": "Detects hepatitis B surface antigen (HBsAg) in blood to identify active or chronic hepatitis B infection.",
        "symptoms_related_to_test": "Jaundice, fatigue, abdominal pain, dark urine.",
        "result_interpretation": {
            "positive": "Indicates active or chronic hepatitis B infection.",
            "negative": "No hepatitis B surface antigen detected."
        },
        "features": [
            "Detects hepatitis B infection early",
            "Essential for liver health monitoring",
            "Important for blood donors and prenatal screening"
        ],
        "insight_and_action_plan": {
            "next_steps": "If positive, consult your doctor for liver function tests and antiviral management.",
            "prevention_tip": "Get vaccinated against hepatitis B and avoid sharing personal items."
        }
    },
    {
        "id": 21,
        "category": "Hematology",
        "name": "Erythrocyte Sedimentation Rate (ESR)",
        "price": 10000,
        "image": "./images/ESR.webp",
        "duration": "Same-Day (2–3 Hours)",
        "who_its_for": "Individuals with symptoms of inflammation, infection, or autoimmune disorders.",
        "description": "Measures how quickly red blood cells settle at the bottom of a test tube, which helps detect inflammation or infection.",
        "symptoms_related_to_test": "Fever, joint pain, fatigue, or unexplained inflammation.",
        "result_interpretation": {
            "positive": "Elevated ESR indicates inflammation, infection, or autoimmune conditions.",
            "negative": "Normal ESR suggests no significant inflammation."
        },
        "features": [
            "Detects inflammation levels",
            "Supports diagnosis of autoimmune or chronic diseases",
            "Used to monitor treatment progress"
        ],
        "insight_and_action_plan": {
            "next_steps": "Further diagnostic tests may be required to identify the source of inflammation.",
            "prevention_tip": "Maintain a balanced diet and manage chronic conditions effectively."
        }
    },
    {
        "id": 22,
        "category": "Gastrointestinal",
        "name": "Faecal Occult Blood (FOB) Test",
        "price": 4000,
        "image": "./images/FOB.webp",
        "duration": "Same-Day (4 Hours)",
        "who_its_for": "Individuals with digestive issues, anemia, or suspected gastrointestinal bleeding.",
        "description": "Detects hidden (occult) blood in the stool, often an early sign of colon cancer or intestinal bleeding.",
        "symptoms_related_to_test": "Unexplained anemia, dark stools, or abdominal discomfort.",
        "result_interpretation": {
            "positive": "Indicates possible bleeding in the gastrointestinal tract.",
            "negative": "No blood detected in stool."
        },
        "features": [
            "Non-invasive screening for intestinal bleeding",
            "Helps detect early signs of colon cancer",
            "Simple and quick analysis"
        ],
        "insight_and_action_plan": {
            "next_steps": "If positive, proceed with colonoscopy or imaging for further investigation.",
            "prevention_tip": "Eat a high-fiber diet and undergo regular colorectal screenings."
        }
    },
    {
        "id": 23,
        "category": "Gastrointestinal",
        "name": "Helicobacter Pylori Antibody Test",
        "price": 5000,
        "image": "./images/HPYL.webp",
        "duration": "Same-Day (3–4 Hours)",
        "who_its_for": "Individuals with frequent stomach pain, ulcers, or acid reflux.",
        "description": "Detects antibodies to Helicobacter pylori, a bacterium associated with gastritis and peptic ulcers.",
        "symptoms_related_to_test": "Abdominal pain, bloating, nausea, or indigestion.",
        "result_interpretation": {
            "positive": "Indicates current or past H. pylori infection.",
            "negative": "No H. pylori antibodies detected."
        },
        "features": [
            "Identifies H. pylori infection",
            "Helps diagnose ulcers and gastritis",
            "Simple blood-based test"
        ],
        "insight_and_action_plan": {
            "next_steps": "If positive, confirm with urea breath or stool antigen test and start antibiotic therapy.",
            "prevention_tip": "Maintain proper hygiene and avoid contaminated food or water."
        }
    },
    {
        "id": 24,
        "category": "Endocrinology",
        "name": "Ovulation Monitoring Test",
        "price": 12000,
        "image": "./images/OMT.webp",
        "duration": "Same-Day (Depends on cycle tracking)",
        "who_its_for": "Women tracking fertility or investigating menstrual irregularities.",
        "description": "Monitors hormonal changes and ovulation timing to assess fertility and reproductive health.",
        "symptoms_related_to_test": "Irregular periods, infertility, or hormonal imbalance.",
        "result_interpretation": {
            "positive": "Confirms ovulation period and fertility window.",
            "negative": "Absence of ovulation may indicate hormonal imbalance."
        },
        "features": [
            "Assists in fertility tracking",
            "Evaluates hormonal patterns",
            "Used in infertility assessments"
        ],
        "insight_and_action_plan": {
            "next_steps": "Consult a gynecologist or endocrinologist if no ovulation is detected.",
            "prevention_tip": "Maintain a healthy lifestyle and track menstrual cycles regularly."
        }
    },
    {
        "id": 25,
        "category": "Microbiology/Infectious Disease",
        "name": "High Vaginal Swab Microscopy, Culture & Sensitivity",
        "price": 8500,
        "image": "./images/HVSMCS.webp",
        "duration": "Next-Day (24 Hours)",
        "who_its_for": "Women with vaginal discharge, itching, or suspected infections.",
        "description": "Detects and identifies bacteria, yeast, or parasites in vaginal secretions and tests antibiotic sensitivity.",
        "symptoms_related_to_test": "Abnormal discharge, irritation, itching, or odor.",
        "result_interpretation": {
            "positive": "Confirms bacterial, fungal, or parasitic infection with antibiotic sensitivity profile.",
            "negative": "No pathogens detected."
        },
        "features": [
            "Identifies vaginal infections",
            "Guides effective antibiotic treatment",
            "Microscopy and culture-based confirmation"
        ],
        "insight_and_action_plan": {
            "next_steps": "Use prescribed antibiotics or antifungal medication based on sensitivity report.",
            "prevention_tip": "Maintain good personal hygiene and avoid douching or unprotected intercourse."
        }
    },
    {
        "id": 26,
        "category": "Urine Tests (Non-Microbiology)",
        "name": "Urine Culture & Sensitivity",
        "price": 6500,
        "image": "./images/URMCS.webp",
        "duration": "Next-Day (18–24 Hours)",
        "who_its_for": "Individuals with urinary tract infection (UTI) symptoms.",
        "description": "Detects bacteria in urine and identifies the most effective antibiotics for treatment.",
        "symptoms_related_to_test": "Painful urination, frequent urination, or cloudy urine.",
        "result_interpretation": {
            "positive": "Confirms bacterial infection and identifies antibiotic sensitivity.",
            "negative": "No bacterial growth detected."
        },
        "features": [
            "Accurate UTI diagnosis",
            "Guides antibiotic therapy",
            "Culture-based confirmation"
        ],
        "insight_and_action_plan": {
            "next_steps": "Follow the prescribed antibiotic regimen strictly.",
            "prevention_tip": "Stay hydrated and urinate frequently to flush out bacteria."
        }
    },
    {
        "id": 27,
        "category": "Gastrointestinal",
        "name": "Total and Direct Bilirubin",
        "price": 6000,
        "image": "./images/TDBIL.webp",
        "duration": "Same-Day (4 Hours)",
        "who_its_for": "Individuals with jaundice, liver disease, or bile duct obstruction.",
        "description": "Measures total and direct bilirubin levels to assess liver function and detect bile flow problems.",
        "symptoms_related_to_test": "Yellowing of eyes/skin, fatigue, dark urine, or nausea.",
        "result_interpretation": {
            "positive": "Elevated levels suggest liver or bile duct issues.",
            "negative": "Normal bilirubin levels indicate healthy liver function."
        },
        "features": [
            "Assesses liver and gallbladder function",
            "Differentiates between direct and indirect bilirubin",
            "Used in jaundice evaluation"
        ],
        "insight_and_action_plan": {
            "next_steps": "If elevated, additional liver function tests and imaging may be required.",
            "prevention_tip": "Avoid excessive alcohol intake and maintain a balanced diet."
        }
    },
    {
        "id": 28,
        "category": "Miscellaneous/Other",
        "name": "Basic Computer Assisted Semen Analysis (for Hospital Use)",
        "price": 4000,
        "image": "./images/BCASA.webp",
        "duration": "Same-Day (2–3 Hours)",
        "who_its_for": "Men undergoing fertility evaluation or treatment follow-up.",
        "description": "Basic assessment of sperm count, motility, and morphology using automated analysis tools.",
        "symptoms_related_to_test": "Infertility or abnormal semen parameters.",
        "result_interpretation": {
            "positive": "Indicates reduced sperm quality or count.",
            "negative": "Normal semen parameters suggest healthy fertility."
        },
        "features": [
            "Evaluates male fertility parameters",
            "Computer-assisted precision",
            "Useful for routine fertility assessment"
        ],
        "insight_and_action_plan": {
            "next_steps": "Consult a fertility specialist for advanced reproductive evaluation if abnormalities are found.",
            "prevention_tip": "Maintain a healthy weight, avoid smoking, and reduce alcohol intake."
        }
    },
    {
        "id": 29,
        "category": "Miscellaneous/Other",
        "name": "Complete Computer Assisted Semen Analysis, Culture & Sensitivity",
        "price": 18000,
        "image": "./images/COCASA.webp",
        "duration": "Next-Day (24 Hours)",
        "who_its_for": "Men with infertility concerns or recurrent genital infections.",
        "description": "Comprehensive semen analysis including sperm count, motility, morphology, and microbial culture with antibiotic sensitivity.",
        "symptoms_related_to_test": "Low fertility, testicular pain, or infection-related discharge.",
        "result_interpretation": {
            "positive": "Indicates abnormal sperm parameters or infection.",
            "negative": "Normal sperm health and no infection detected."
        },
        "features": [
            "Full fertility evaluation",
            "Includes culture for infection detection",
            "Provides antibiotic sensitivity results"
        ],
        "insight_and_action_plan": {
            "next_steps": "Follow treatment based on sensitivity report or consider fertility therapy.",
            "prevention_tip": "Adopt a healthy lifestyle and avoid prolonged heat exposure to the groin area."
        }
    },
    {
        "id": 30,
        "category": "Renal Function / Urine Tests (Non-Microbiology)",
        "name": "Urea and Creatinine Test",
        "price": 12000,
        "image": "./images/URCR.webp",
        "duration": "Same-Day (3–4 Hours)",
        "who_its_for": "Individuals with kidney disease symptoms or those on medications affecting kidney function.",
        "description": "Measures blood urea and creatinine levels to assess kidney performance and filtration capacity.",
        "symptoms_related_to_test": "Swelling, fatigue, reduced urination, or high blood pressure.",
        "result_interpretation": {
            "positive": "Elevated values indicate impaired kidney function.",
            "negative": "Normal levels suggest healthy kidney filtration."
        },
        "features": [
            "Evaluates kidney health",
            "Monitors treatment response in kidney disease",
            "Essential pre-surgical and medication safety test"
        ],
        "insight_and_action_plan": {
            "next_steps": "If abnormal, consult a nephrologist for further evaluation.",
            "prevention_tip": "Stay hydrated and avoid excessive use of painkillers or high-protein diets."
        }
    },
    {
        "id": 31,
        "category": "Electrolyte / Renal Function",
        "name": "Serum Electrolytes",
        "price": 9000,
        "image": "./images/SE.webp",
        "duration": "Same-Day Analysis (Typically 3–5 Hours)",
        "who_its_for": "Patients with dehydration, kidney disease, or those on diuretics or IV fluids.",
        "description": "Measures the levels of essential electrolytes such as sodium, potassium, and chloride in the blood to assess hydration and organ function.",
        "symptoms_related_to_test": "Fatigue, muscle cramps, confusion, irregular heartbeat, or dehydration.",
        "result_interpretation": {
            "positive": "Abnormal sodium or potassium levels may indicate dehydration, kidney disease, or hormonal imbalance.",
            "negative": "Balanced electrolyte levels suggest proper kidney and metabolic function."
        },
        "features": [
            "Measures sodium, potassium, chloride, bicarbonate",
            "Assesses fluid and electrolyte balance",
            "Essential for patients on IV fluids or medications"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal results require correction of underlying cause such as hydration, diet adjustment, or medication changes.",
            "prevention_tip": "Maintain adequate hydration and avoid excessive salt intake."
        }
    },
    {
        "id": 32,
        "category": "Renal Function / Electrolyte",
        "name": "Electrolyte, Urea, Creatinine",
        "price": 25000,
        "image": "./images/EUC.webp",
        "duration": "Same-Day Analysis (Typically 5 Hours)",
        "who_its_for": "Individuals with suspected kidney disease or those on long-term medications affecting the kidneys.",
        "description": "A combined test assessing electrolytes, urea, and creatinine to evaluate kidney and metabolic function.",
        "symptoms_related_to_test": "Swelling, fatigue, nausea, confusion, or changes in urination.",
        "result_interpretation": {
            "positive": "High urea or creatinine levels may indicate kidney impairment or dehydration.",
            "negative": "Normal levels suggest proper kidney filtration and balance."
        },
        "features": [
            "Comprehensive renal function screening",
            "Detects early kidney damage",
            "Monitors hydration and metabolic balance"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal findings may require nephrology review and management of underlying conditions like hypertension or diabetes.",
            "prevention_tip": "Drink enough water and monitor blood pressure regularly."
        }
    },
    {
        "id": 33,
        "category": "Liver Function",
        "name": "Liver Function Test",
        "price": 16000,
        "image": "./images/LFT.webp",
        "duration": "Same-Day (Typically 4 Hours)",
        "who_its_for": "Individuals with jaundice, hepatitis, or long-term alcohol or medication use.",
        "description": "Assesses enzymes, proteins, and bilirubin levels to evaluate liver health and detect inflammation or damage.",
        "symptoms_related_to_test": "Jaundice, fatigue, nausea, abdominal pain, or dark urine.",
        "result_interpretation": {
            "positive": "Elevated liver enzymes may indicate liver inflammation or disease.",
            "negative": "Normal results suggest healthy liver function."
        },
        "features": [
            "Tests ALT, AST, ALP, bilirubin, and protein levels",
            "Detects liver damage and inflammation",
            "Monitors medication or alcohol-related effects"
        ],
        "insight_and_action_plan": {
            "next_steps": "Follow-up may include ultrasound or hepatitis screening if abnormal.",
            "prevention_tip": "Avoid excessive alcohol and maintain a balanced diet rich in fruits and vegetables."
        }
    },
    {
        "id": 34,
        "category": "Cardiac Bio-Markers",
        "name": "Lipid Profile",
        "price": 18000,
        "image": "./images/LIPRO.webp",
        "duration": "Same-Day Analysis (4–5 Hours)",
        "who_its_for": "Adults for routine screening or those at risk for heart disease.",
        "description": "Measures cholesterol and triglycerides to assess cardiovascular health.",
        "symptoms_related_to_test": "Usually asymptomatic; indicated for cardiovascular risk assessment.",
        "result_interpretation": {
            "positive": "High LDL or triglycerides indicate elevated heart disease risk.",
            "negative": "Normal lipid levels suggest lower risk of cardiovascular complications."
        },
        "features": [
            "Measures total cholesterol, HDL, LDL, triglycerides",
            "Evaluates heart health and risk factors",
            "Guides diet and lifestyle recommendations"
        ],
        "insight_and_action_plan": {
            "next_steps": "Adjust diet and consider medical therapy if lipid levels are high.",
            "prevention_tip": "Exercise regularly and reduce intake of saturated fats."
        }
    },
    {
        "id": 35,
        "category": "Cardiac Bio-Markers",
        "name": "Total Cholesterol",
        "price": 8000,
        "image": "./images/TOTCHOL.webp",
        "duration": "Same-Day Analysis (3 Hours)",
        "who_its_for": "Individuals undergoing cardiovascular risk assessment.",
        "description": "Measures total cholesterol levels to assess lipid balance and heart disease risk.",
        "symptoms_related_to_test": "None specific; used for monitoring lipid management.",
        "result_interpretation": {
            "positive": "Elevated cholesterol indicates increased cardiovascular risk.",
            "negative": "Normal values suggest healthy lipid metabolism."
        },
        "features": [
            "Simple lipid screening test",
            "Monitors dietary and medication effects",
            "Quick and cost-effective"
        ],
        "insight_and_action_plan": {
            "next_steps": "If high, evaluate full lipid panel and implement dietary changes.",
            "prevention_tip": "Adopt a heart-healthy diet with low cholesterol foods."
        }
    },
    {
        "id": 36,
        "category": "Endocrinology",
        "name": "Standard Thyroid Panel (T4 and TSH)",
        "price": 25000,
        "image": "./images/STP.webp",
        "duration": "24 Hours",
        "who_its_for": "Individuals with fatigue, weight changes, or hormonal imbalances.",
        "description": "Assesses thyroid hormone levels (T4, TSH) to detect hypo- or hyperthyroidism.",
        "symptoms_related_to_test": "Fatigue, mood swings, weight gain/loss, or temperature intolerance.",
        "result_interpretation": {
            "positive": "Abnormal TSH or T4 levels indicate thyroid dysfunction.",
            "negative": "Normal results reflect healthy thyroid activity."
        },
        "features": [
            "Measures key thyroid hormones",
            "Detects thyroid imbalance",
            "Useful for ongoing endocrine monitoring"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal results may require medication adjustment or endocrinology referral.",
            "prevention_tip": "Ensure adequate iodine intake and regular screening if symptomatic."
        }
    },
    {
        "id": 37,
        "category": "Endocrinology",
        "name": "Extended Thyroid Panel (T3, T4, and TSH)",
        "price": 54000,
        "image": "./images/ETP.webp",
        "duration": "24 Hours",
        "who_its_for": "Patients requiring a complete thyroid function evaluation.",
        "description": "Comprehensive thyroid test measuring T3, T4, and TSH levels to assess endocrine health.",
        "symptoms_related_to_test": "Unexplained fatigue, weight fluctuation, mood issues, or thyroid disorders.",
        "result_interpretation": {
            "positive": "Abnormal T3 or T4 levels suggest thyroid overactivity or underactivity.",
            "negative": "Normal results indicate balanced thyroid function."
        },
        "features": [
            "Covers all major thyroid markers",
            "Provides detailed hormonal insights",
            "Useful for diagnostic confirmation"
        ],
        "insight_and_action_plan": {
            "next_steps": "Follow-up with an endocrinologist for interpretation and management.",
            "prevention_tip": "Maintain healthy iodine levels and monitor thyroid function periodically."
        }
    },
    {
        "id": 38,
        "category": "Endocrinology",
        "name": "Hormonal Profile",
        "price": 80000,
        "image": "./images/HORPRO.webp",
        "duration": "48 Hours",
        "who_its_for": "Both men and women with reproductive, stress, or hormonal imbalance issues.",
        "description": "Evaluates multiple hormones to assess reproductive, adrenal, and thyroid health.",
        "symptoms_related_to_test": "Infertility, fatigue, mood swings, irregular cycles, or low libido.",
        "result_interpretation": {
            "positive": "Imbalanced hormone levels indicate endocrine or reproductive dysfunction.",
            "negative": "Normal profile suggests proper hormonal regulation."
        },
        "features": [
            "Tests key reproductive and stress hormones",
            "Comprehensive hormonal assessment",
            "Supports fertility and endocrine diagnosis"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal findings may lead to specific hormonal therapy or further testing.",
            "prevention_tip": "Maintain healthy sleep, nutrition, and stress management."
        }
    },
    {
        "id": 39,
        "category": "Immunology/Serology",
        "name": "Retroviral Screening",
        "price": 4000,
        "image": "./images/RVS.webp",
        "duration": "Same-Day (Typically 3 Hours)",
        "who_its_for": "Individuals seeking HIV status confirmation or pre-surgical screening.",
        "description": "Detects antibodies associated with HIV infection to assess immune system health.",
        "symptoms_related_to_test": "Fever, weight loss, recurrent infections, or unprotected exposure risk.",
        "result_interpretation": {
            "positive": "Indicates exposure to HIV; requires confirmatory testing.",
            "negative": "No HIV antibodies detected."
        },
        "features": [
            "Rapid HIV screening",
            "Highly accurate antibody detection",
            "Essential for pre-employment or premarital screening"
        ],
        "insight_and_action_plan": {
            "next_steps": "Positive results should be confirmed and managed with antiretroviral therapy.",
            "prevention_tip": "Practice safe sex and get tested regularly."
        }
    },
    {
        "id": 40,
        "category": "Cancer Markers",
        "name": "Prostate Specific Antigen (PSA)",
        "price": 16000,
        "image": "./images/TPSA.webp",
        "duration": "24 Hours",
        "who_its_for": "Men above 40 or those with urinary or prostate-related symptoms.",
        "description": "Measures PSA levels to detect prostate inflammation or cancer risk.",
        "symptoms_related_to_test": "Frequent urination, pelvic pain, or difficulty urinating.",
        "result_interpretation": {
            "positive": "Elevated PSA may indicate prostate enlargement, infection, or cancer.",
            "negative": "Normal PSA levels suggest healthy prostate condition."
        },
        "features": [
            "Early detection of prostate issues",
            "Useful for cancer risk monitoring",
            "Simple blood test for men’s health"
        ],
        "insight_and_action_plan": {
            "next_steps": "Elevated PSA requires follow-up with a urologist for imaging or biopsy.",
            "prevention_tip": "Maintain regular prostate checks and healthy lifestyle."
        }
    },
    {
        "id": 41,
        "category": "Cancer Markers",
        "name": "Carcinoembryonic Antigen (CEA)",
        "price": 14000,
        "image": "./images/CEA.webp",
        "duration": "24 Hours",
        "who_its_for": "Patients under evaluation for cancers, especially of the colon, lungs, or breast.",
        "description": "A tumor marker test used to help detect and monitor certain cancers and assess treatment response.",
        "symptoms_related_to_test": "Unexplained weight loss, fatigue, or persistent pain depending on cancer location.",
        "result_interpretation": {
            "positive": "Elevated CEA levels may indicate active or recurrent cancer.",
            "negative": "Normal levels suggest no active malignancy or effective treatment."
        },
        "features": [
            "Tumor marker monitoring",
            "Assists in cancer diagnosis and management",
            "Tracks treatment progress"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal levels should prompt further imaging or oncological evaluation.",
            "prevention_tip": "Regular cancer screening and healthy living reduce overall cancer risk."
        }
    },
    {
        "id": 42,
        "category": "Microbiology/Infectious Disease",
        "name": "Tropical Extended Panel",
        "price": 22500,
        "image": "./images/TREX.webp",
        "duration": "24–48 Hours",
        "who_its_for": "Patients with persistent fever, travel history, or suspected tropical infections.",
        "description": "Comprehensive screening for multiple tropical diseases including malaria, typhoid, and others.",
        "symptoms_related_to_test": "Prolonged fever, weakness, joint pain, or rash after travel or exposure.",
        "result_interpretation": {
            "positive": "Indicates active infection with one or more tropical pathogens.",
            "negative": "No detectable infection within the tested parameters."
        },
        "features": [
            "Covers major tropical pathogens",
            "Useful for travelers and febrile patients",
            "Combines multiple infectious markers"
        ],
        "insight_and_action_plan": {
            "next_steps": "If positive, targeted treatment for specific infection is advised.",
            "prevention_tip": "Use insect protection, clean water, and safe food handling in endemic areas."
        }
    },
    {
        "id": 43,
        "category": "Microbiology/Infectious Disease",
        "name": "Tropical Basic Panel",
        "price": 15500,
        "image": "./images/TROBAS.webp",
        "duration": "24 Hours",
        "who_its_for": "Patients with unexplained fever or those in malaria- and typhoid-endemic areas.",
        "description": "Basic screening panel for common tropical infections such as malaria and typhoid.",
        "symptoms_related_to_test": "Fever, chills, fatigue, and gastrointestinal disturbances.",
        "result_interpretation": {
            "positive": "Indicates active infection requiring treatment.",
            "negative": "No infection detected for the pathogens screened."
        },
        "features": [
            "Covers key tropical diseases",
            "Rapid and affordable",
            "Ideal for early screening"
        ],
        "insight_and_action_plan": {
            "next_steps": "Positive results require physician-guided antibiotic or antimalarial therapy.",
            "prevention_tip": "Ensure mosquito protection and safe food and water consumption."
        }
    },
    {
        "id": 44,
        "category": "Endocrinology",
        "name": "Serum Pregnancy Test",
        "price": 2500,
        "image": "./images/SPT.webp",
        "duration": "Same-Day (Typically 2–3 Hours)",
        "who_its_for": "Women of reproductive age to confirm or rule out pregnancy.",
        "description": "Measures human chorionic gonadotropin (hCG) hormone in blood to detect pregnancy.",
        "symptoms_related_to_test": "Missed period, nausea, breast tenderness, or fatigue.",
        "result_interpretation": {
            "positive": "Indicates pregnancy or presence of hCG hormone.",
            "negative": "No detectable hCG; pregnancy unlikely."
        },
        "features": [
            "Highly accurate early pregnancy test",
            "Quantitative hCG measurement",
            "Useful for early pregnancy confirmation"
        ],
        "insight_and_action_plan": {
            "next_steps": "Positive result should be followed by prenatal consultation.",
            "prevention_tip": "Track menstrual cycles and use contraception if pregnancy is not desired."
        }
    },
    {
        "id": 45,
        "category": "Liver Function",
        "name": "Albumin",
        "price": 6000,
        "image": "./images/ALB.webp",
        "duration": "Same-Day (Typically 3–4 Hours)",
        "who_its_for": "Patients with liver disease, malnutrition, or chronic illness.",
        "description": "Measures albumin levels to assess liver function and nutritional status.",
        "symptoms_related_to_test": "Swelling, fatigue, or fluid retention.",
        "result_interpretation": {
            "positive": "Low albumin may indicate liver dysfunction, kidney disease, or malnutrition.",
            "negative": "Normal levels indicate adequate protein synthesis and health."
        },
        "features": [
            "Assesses protein synthesis capacity",
            "Indicator of nutritional status",
            "Useful in chronic illness monitoring"
        ],
        "insight_and_action_plan": {
            "next_steps": "Low albumin may require liver evaluation or nutritional support.",
            "prevention_tip": "Maintain a balanced diet rich in protein and manage chronic illnesses."
        }
    },
    {
        "id": 46,
        "category": "Endocrinology",
        "name": "Vitamin D Test",
        "price": 16000,
        "image": "./images/VITD.webp",
        "duration": "24 Hours",
        "who_its_for": "Individuals with bone pain, fatigue, or limited sun exposure.",
        "description": "Assesses Vitamin D levels essential for bone, immune, and muscle health.",
        "symptoms_related_to_test": "Bone weakness, frequent illness, or fatigue.",
        "result_interpretation": {
            "positive": "Low Vitamin D suggests deficiency affecting bone and immune health.",
            "negative": "Normal levels indicate healthy sun exposure and diet."
        },
        "features": [
            "Evaluates bone and immune health",
            "Detects Vitamin D deficiency",
            "Helps guide supplementation"
        ],
        "insight_and_action_plan": {
            "next_steps": "Deficiency may require dietary adjustment or supplementation.",
            "prevention_tip": "Get regular sunlight exposure and include fortified foods."
        }
    },
    {
        "id": 47,
        "category": "Endocrinology",
        "name": "Cortisol Test",
        "price": 18000,
        "image": "./images/CORT.webp",
        "duration": "24 Hours",
        "who_its_for": "Patients with suspected stress-related, adrenal, or metabolic disorders.",
        "description": "Measures cortisol levels to assess adrenal gland function and stress response.",
        "symptoms_related_to_test": "Fatigue, weight changes, anxiety, or high blood pressure.",
        "result_interpretation": {
            "positive": "Abnormal cortisol levels suggest adrenal overactivity or insufficiency.",
            "negative": "Normal range indicates healthy adrenal balance."
        },
        "features": [
            "Assesses adrenal gland health",
            "Helps diagnose Cushing’s or Addison’s disease",
            "Evaluates stress hormone balance"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal levels should be correlated with symptoms and endocrinology review.",
            "prevention_tip": "Manage stress and maintain regular sleep patterns."
        }
    },
    {
        "id": 48,
        "category": "Renal Function",
        "name": "Kidney Function Test (KFT)",
        "price": 14000,
        "image": "./images/KFT.webp",
        "duration": "Same-Day (Typically 4–5 Hours)",
        "who_its_for": "Patients with diabetes, hypertension, or kidney symptoms.",
        "description": "Assesses the health of kidneys by measuring creatinine, urea, and other related markers.",
        "symptoms_related_to_test": "Swelling, fatigue, changes in urination, or nausea.",
        "result_interpretation": {
            "positive": "High urea or creatinine levels indicate possible kidney impairment.",
            "negative": "Normal levels suggest proper kidney function."
        },
        "features": [
            "Evaluates kidney performance",
            "Detects early renal damage",
            "Essential for diabetic and hypertensive monitoring"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal results may require dietary management or nephrology consultation.",
            "prevention_tip": "Stay hydrated and monitor blood pressure regularly."
        }
    },
    {
        "id": 49,
        "category": "Microbiology/Infectious Disease",
        "name": "Micro Filaria Test",
        "price": 8000,
        "image": "./images/MF.webp",
        "duration": "24 Hours",
        "who_its_for": "Individuals with swelling of limbs or suspected filarial infection.",
        "description": "Detects microfilariae parasites in the blood that cause filariasis (elephantiasis).",
        "symptoms_related_to_test": "Swelling in limbs, fever, or lymphatic inflammation.",
        "result_interpretation": {
            "positive": "Indicates presence of filarial infection requiring antiparasitic treatment.",
            "negative": "No filarial parasites detected."
        },
        "features": [
            "Confirms filarial infection",
            "Helps guide antiparasitic treatment",
            "Important in endemic regions"
        ],
        "insight_and_action_plan": {
            "next_steps": "Treatment with antiparasitic medication is advised if positive.",
            "prevention_tip": "Use mosquito nets and preventive drugs in endemic zones."
        }
    },
    {
        "id": 50,
        "category": "Electrolyte / Mineral Panel",
        "name": "Calcium Test",
        "price": 14000,
        "image": "./images/CAL.webp",
        "duration": "Same-Day (Typically 3 Hours)",
        "who_its_for": "Patients with bone disorders, muscle cramps, or kidney disease.",
        "description": "Measures calcium levels in blood to assess bone health and metabolic balance.",
        "symptoms_related_to_test": "Muscle weakness, bone pain, tingling, or fatigue.",
        "result_interpretation": {
            "positive": "Abnormal calcium may indicate bone disease, kidney disorder, or parathyroid issues.",
            "negative": "Normal calcium indicates healthy bone and metabolic status."
        },
        "features": [
            "Evaluates bone and metabolic health",
            "Useful in endocrine and renal conditions",
            "Guides calcium supplementation"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal results require further endocrine or kidney evaluation.",
            "prevention_tip": "Ensure adequate calcium intake through diet and Vitamin D."
        }
    },
    {
        "id": 51,
        "category": "Endocrinology",
        "name": "Prolactin Test",
        "price": 18000,
        "image": "./images/PRL.webp",
        "duration": "24 Hours",
        "who_its_for": "Individuals with infertility, irregular menstruation, or symptoms of hormonal imbalance.",
        "description": "Measures prolactin hormone levels to evaluate pituitary gland function and reproductive health.",
        "symptoms_related_to_test": "Irregular periods, nipple discharge, infertility, or low libido.",
        "result_interpretation": {
            "positive": "High prolactin levels may indicate pituitary disorder or hormonal imbalance.",
            "negative": "Normal levels indicate balanced pituitary and reproductive hormone function."
        },
        "features": [
            "Assesses pituitary hormone activity",
            "Important for fertility evaluation",
            "Helps diagnose hormonal imbalance"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal results require hormonal regulation or endocrinology consultation.",
            "prevention_tip": "Manage stress and maintain adequate sleep to support hormone balance."
        }
    },
    {
        "id": 52,
        "category": "Endocrinology",
        "name": "Progesterone Test",
        "price": 18000,
        "image": "./images/PROG.webp",
        "duration": "24 Hours",
        "who_its_for": "Women monitoring ovulation, fertility, or pregnancy status.",
        "description": "Measures progesterone levels to assess ovulation, menstrual cycle health, and pregnancy maintenance.",
        "symptoms_related_to_test": "Irregular cycles, infertility, or recurrent pregnancy loss.",
        "result_interpretation": {
            "positive": "Low progesterone may indicate anovulation or hormonal imbalance.",
            "negative": "Normal progesterone levels reflect healthy ovulation and fertility."
        },
        "features": [
            "Assesses ovulation status",
            "Monitors pregnancy hormone support",
            "Useful in fertility evaluation"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal results may require hormonal therapy or fertility assessment.",
            "prevention_tip": "Track cycles and manage stress to support reproductive health."
        }
    },
    {
        "id": 53,
        "category": "Endocrinology",
        "name": "Estradiol Hormonal Test (E2)",
        "price": 16000,
        "image": "./images/E2.webp",
        "duration": "24 Hours",
        "who_its_for": "Women assessing fertility, menopause, or estrogen-related issues.",
        "description": "Measures estradiol levels to evaluate ovarian function and hormonal balance.",
        "symptoms_related_to_test": "Hot flashes, irregular menstruation, or infertility.",
        "result_interpretation": {
            "positive": "Low estradiol may indicate ovarian insufficiency or menopause; high levels may indicate estrogen dominance.",
            "negative": "Normal estradiol levels support healthy reproductive function."
        },
        "features": [
            "Evaluates estrogen balance",
            "Assesses ovarian and menstrual health",
            "Aids in fertility management"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal results may require hormonal or gynecological management.",
            "prevention_tip": "Maintain a balanced diet and manage stress for hormonal harmony."
        }
    },
    {
        "id": 54,
        "category": "Endocrinology",
        "name": "Follicle Stimulating Hormone (FSH) Test",
        "price": 12000,
        "image": "./images/FSH.webp",
        "duration": "24 Hours",
        "who_its_for": "Men and women experiencing infertility or irregular menstrual cycles.",
        "description": "Measures FSH hormone levels to assess reproductive and pituitary function.",
        "symptoms_related_to_test": "Infertility, irregular cycles, or delayed puberty.",
        "result_interpretation": {
            "positive": "High FSH may indicate ovarian failure or menopause; low FSH may suggest pituitary dysfunction.",
            "negative": "Normal FSH levels indicate healthy reproductive hormone regulation."
        },
        "features": [
            "Assesses fertility status",
            "Monitors menopausal transition",
            "Useful for both male and female hormone testing"
        ],
        "insight_and_action_plan": {
            "next_steps": "Results guide fertility treatment or hormonal evaluation.",
            "prevention_tip": "Maintain hormonal balance through healthy lifestyle and stress control."
        }
    },
    {
        "id": 55,
        "category": "Endocrinology",
        "name": "Luteinizing Hormone (LH) Test",
        "price": 12000,
        "image": "./images/LH.webp",
        "duration": "24 Hours",
        "who_its_for": "Individuals with fertility challenges or irregular menstrual cycles.",
        "description": "Measures LH levels to determine ovulation timing and evaluate pituitary function.",
        "symptoms_related_to_test": "Infertility, irregular cycles, or hormonal imbalance symptoms.",
        "result_interpretation": {
            "positive": "High LH may suggest PCOS or premature ovarian failure; low LH may reflect pituitary dysfunction.",
            "negative": "Normal levels indicate balanced reproductive hormone function."
        },
        "features": [
            "Evaluates reproductive health",
            "Determines ovulation timing",
            "Assists in diagnosing hormonal disorders"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal results should be correlated with FSH and estrogen levels.",
            "prevention_tip": "Adopt stress management and balanced diet to support hormone regulation."
        }
    },
    {
        "id": 56,
        "category": "Immunology/Serology",
        "name": "Hepatitis C Virus (HCV) Test",
        "price": 4000,
        "image": "./images/HCV.webp",
        "duration": "Same-Day (Typically 3–4 Hours)",
        "who_its_for": "Individuals at risk for liver infection, blood transfusion recipients, or healthcare workers.",
        "description": "Screens for antibodies against the Hepatitis C virus to detect infection or exposure.",
        "symptoms_related_to_test": "Fatigue, jaundice, nausea, or abdominal discomfort.",
        "result_interpretation": {
            "positive": "Indicates HCV infection requiring confirmatory RNA testing.",
            "negative": "No antibodies detected; no active infection."
        },
        "features": [
            "Screens for Hepatitis C antibodies",
            "Helps prevent chronic liver disease progression",
            "Quick and accurate serological test"
        ],
        "insight_and_action_plan": {
            "next_steps": "Positive cases require confirmatory viral load testing and treatment.",
            "prevention_tip": "Avoid sharing needles and ensure safe medical procedures."
        }
    },
    {
        "id": 57,
        "category": "Immunology/Serology",
        "name": "Hepatitis B Surface Antigen (HBsAg) Test",
        "price": 4000,
        "image": "./images/Hbsag.webp",
        "duration": "Same-Day (Typically 3 Hours)",
        "who_its_for": "Individuals at risk of Hepatitis B, including healthcare workers and expectant mothers.",
        "description": "Detects the presence of Hepatitis B surface antigen in the blood, indicating infection.",
        "symptoms_related_to_test": "Fatigue, jaundice, abdominal pain, or dark urine.",
        "result_interpretation": {
            "positive": "Active Hepatitis B infection detected.",
            "negative": "No Hepatitis B surface antigen present."
        },
        "features": [
            "Detects early and chronic Hepatitis B infection",
            "Essential for blood donors and prenatal screening",
            "Fast and reliable detection"
        ],
        "insight_and_action_plan": {
            "next_steps": "Positive results require confirmatory viral load testing and possible treatment.",
            "prevention_tip": "Vaccination provides effective protection against Hepatitis B."
        }
    },
    {
        "id": 58,
        "category": "Immunology/Serology",
        "name": "Hepatitis A Virus (HAV) Test",
        "price": 5000,
        "image": "./images/HAV.webp",
        "duration": "Same-Day (Typically 3–4 Hours)",
        "who_its_for": "Individuals with symptoms of liver infection or exposure to contaminated food/water.",
        "description": "Detects antibodies to Hepatitis A virus to diagnose recent or past infection.",
        "symptoms_related_to_test": "Jaundice, fatigue, nausea, or abdominal discomfort.",
        "result_interpretation": {
            "positive": "Indicates current or past infection with Hepatitis A.",
            "negative": "No evidence of Hepatitis A infection."
        },
        "features": [
            "Confirms acute or previous Hepatitis A infection",
            "Useful for outbreak tracing",
            "Simple and effective antibody screening"
        ],
        "insight_and_action_plan": {
            "next_steps": "Positive results require supportive care and hygiene measures.",
            "prevention_tip": "Vaccination and proper food hygiene prevent infection."
        }
    },
    {
        "id": 59,
        "category": "Endocrinology",
        "name": "Free Tetraiodothyronine (Free T4) Test",
        "price": 18000,
        "image": "./images/FT4.webp",
        "duration": "24 Hours",
        "who_its_for": "Individuals with thyroid disorders or unexplained fatigue, weight, or mood changes.",
        "description": "Measures free T4 hormone levels to assess thyroid gland activity.",
        "symptoms_related_to_test": "Fatigue, weight change, sensitivity to temperature, or mood swings.",
        "result_interpretation": {
            "positive": "Abnormal T4 levels indicate hyperthyroidism or hypothyroidism.",
            "negative": "Normal T4 levels suggest healthy thyroid function."
        },
        "features": [
            "Assesses thyroid function",
            "Useful for diagnosing thyroid diseases",
            "Monitors response to thyroid therapy"
        ],
        "insight_and_action_plan": {
            "next_steps": "Results should be reviewed alongside TSH for accurate diagnosis.",
            "prevention_tip": "Ensure balanced iodine intake and regular thyroid checks."
        }
    },
    {
        "id": 60,
        "category": "Microbiology/Infectious Disease",
        "name": "Chlamydia Trachomatis Test",
        "price": 5500,
        "image": "./images/CHLAMYD.webp",
        "duration": "24 Hours",
        "who_its_for": "Sexually active individuals or those with symptoms of genital infection.",
        "description": "Detects Chlamydia trachomatis bacteria responsible for common sexually transmitted infections.",
        "symptoms_related_to_test": "Painful urination, discharge, pelvic pain, or infertility.",
        "result_interpretation": {
            "positive": "Presence of Chlamydia infection detected.",
            "negative": "No Chlamydia infection present."
        },
        "features": [
            "Accurate STI detection",
            "Essential for reproductive health",
            "Non-invasive and fast testing"
        ],
        "insight_and_action_plan": {
            "next_steps": "Positive cases require antibiotic treatment and partner testing.",
            "prevention_tip": "Use protection and get regular STI screening."
        }
    },
    {
        "id": 61,
        "category": "Miscellaneous/Other",
        "name": "Research Laboratory Test",
        "price": 10000,
        "image": "./images/RES.webp",
        "duration": "Varies (Typically 24–72 Hours)",
        "who_its_for": "Specialized clients, researchers, or organizations conducting study-based lab analyses.",
        "description": "Custom test service for research purposes, involving tailored parameters and controlled conditions.",
        "symptoms_related_to_test": "Not symptom-based; designed for research data collection or validation.",
        "result_interpretation": {
            "positive": "Depends on research goal and experimental design.",
            "negative": "Not clinically diagnostic; result significance determined by study."
        },
        "features": [
            "Flexible research-based test setup",
            "Supports academic and industrial studies",
            "Can be customized per protocol"
        ],
        "insight_and_action_plan": {
            "next_steps": "Discuss research objectives with the laboratory for data interpretation.",
            "prevention_tip": "Ensure sample integrity and standard protocols for accurate research outcomes."
        }
    },
    {
        "id": 62,
        "category": "Cardiac Bio-Markers",
        "name": "Free Prostate Specific Antigen (Free PSA)",
        "price": 16000,
        "image": "./images/FPSA.webp",
        "duration": "24 Hours",
        "who_its_for": "Men undergoing prostate health screening or monitoring after treatment.",
        "description": "Measures the free fraction of PSA in blood to differentiate between benign prostate conditions and cancer.",
        "symptoms_related_to_test": "Frequent urination, weak urine flow, or pelvic discomfort.",
        "result_interpretation": {
            "positive": "Low free PSA ratio may indicate higher prostate cancer risk.",
            "negative": "Higher free PSA suggests benign prostate condition."
        },
        "features": [
            "Improves accuracy of prostate cancer detection",
            "Helps differentiate benign vs malignant conditions",
            "Used with total PSA for better diagnostic clarity"
        ],
        "insight_and_action_plan": {
            "next_steps": "Follow up abnormal results with urologist consultation and imaging if necessary.",
            "prevention_tip": "Maintain healthy diet and regular screening after age 40."
        }
    },
    {
        "id": 63,
        "category": "Cardiac Bio-Markers",
        "name": "Complete PSA Profile",
        "price": 32000,
        "image": "./images/PSA_PRO.webp",
        "duration": "24 Hours",
        "who_its_for": "Men screening for prostate cancer or under prostate disease evaluation.",
        "description": "Comprehensive test measuring total and free PSA levels for assessing prostate health.",
        "symptoms_related_to_test": "Urinary difficulty, pelvic pain, or frequent urination at night.",
        "result_interpretation": {
            "positive": "High total PSA or low free PSA suggests possible malignancy.",
            "negative": "Normal ratios indicate healthy prostate."
        },
        "features": [
            "Combines total and free PSA assessment",
            "Enhances prostate cancer detection accuracy",
            "Useful for treatment monitoring"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal results warrant further imaging or biopsy.",
            "prevention_tip": "Regular checkups reduce risk of undetected prostate conditions."
        }
    },
    {
        "id": 64,
        "category": "Endocrinology",
        "name": "Random Blood Glucose (RBG)",
        "price": 2500,
        "image": "./images/RBG.webp",
        "duration": "Same-Day (Typically 1 Hour)",
        "who_its_for": "Individuals monitoring or screening for diabetes mellitus.",
        "description": "Measures glucose concentration in the blood at any time of the day, regardless of fasting.",
        "symptoms_related_to_test": "Fatigue, frequent urination, excessive thirst, or blurred vision.",
        "result_interpretation": {
            "positive": "Elevated glucose indicates possible diabetes or impaired glucose tolerance.",
            "negative": "Normal glucose levels indicate balanced blood sugar control."
        },
        "features": [
            "Quick diabetes screening",
            "Requires no fasting",
            "Useful for emergency blood sugar checks"
        ],
        "insight_and_action_plan": {
            "next_steps": "If abnormal, confirm with fasting glucose or HbA1c test.",
            "prevention_tip": "Maintain balanced diet and regular exercise."
        }
    },
    {
        "id": 65,
        "category": "Microbiology/Infectious Disease",
        "name": "Gonorrhea Test",
        "price": 7000,
        "image": "./images/Gonor.webp",
        "duration": "24 Hours",
        "who_its_for": "Sexually active individuals or those showing signs of sexually transmitted infections.",
        "description": "Detects Neisseria gonorrhoeae bacteria responsible for gonorrhea infection.",
        "symptoms_related_to_test": "Painful urination, discharge, pelvic pain, or genital irritation.",
        "result_interpretation": {
            "positive": "Confirms gonorrhea infection.",
            "negative": "No infection detected."
        },
        "features": [
            "Highly accurate STI detection",
            "Helps prevent complications and transmission",
            "Simple collection and rapid results"
        ],
        "insight_and_action_plan": {
            "next_steps": "Positive results require antibiotic treatment and partner testing.",
            "prevention_tip": "Practice safe sex and regular STI screening."
        }
    },
    {
        "id": 66,
        "category": "Endocrinology",
        "name": "Fasting Blood Glucose (FBG)",
        "price": 2500,
        "image": "./images/FBG.webp",
        "duration": "Same-Day (Typically 1–2 Hours)",
        "who_its_for": "Individuals with diabetes risk or those under glucose control monitoring.",
        "description": "Measures blood glucose levels after overnight fasting to evaluate body’s sugar regulation.",
        "symptoms_related_to_test": "Frequent thirst, fatigue, weight changes, or blurred vision.",
        "result_interpretation": {
            "positive": "High fasting glucose indicates possible diabetes or pre-diabetes.",
            "negative": "Normal fasting glucose indicates proper insulin function."
        },
        "features": [
            "Primary test for diabetes diagnosis",
            "Simple and fast procedure",
            "Reflects baseline glucose metabolism"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal results should be followed by HbA1c confirmation.",
            "prevention_tip": "Adopt low-sugar diets and maintain active lifestyle."
        }
    },
    {
        "id": 67,
        "category": "Gastrointestinal",
        "name": "Helicobacter Pylori Antigen Test",
        "price": 12000,
        "image": "./images/HPYLANT.webp",
        "duration": "24 Hours",
        "who_its_for": "Individuals with stomach discomfort, ulcer symptoms, or indigestion.",
        "description": "Detects H. pylori antigens in stool or blood to diagnose active infection affecting the stomach lining.",
        "symptoms_related_to_test": "Abdominal pain, bloating, nausea, or heartburn.",
        "result_interpretation": {
            "positive": "Indicates active H. pylori infection requiring treatment.",
            "negative": "No infection detected."
        },
        "features": [
            "Identifies H. pylori bacteria directly",
            "Non-invasive and accurate",
            "Helps prevent ulcer complications"
        ],
        "insight_and_action_plan": {
            "next_steps": "Positive results require antibiotic therapy under medical supervision.",
            "prevention_tip": "Avoid contaminated food and maintain good hygiene."
        }
    },
    {
        "id": 68,
        "category": "Endocrinology",
        "name": "Glycated Haemoglobin (HbA1c)",
        "price": 12000,
        "image": "./images/HbA1c.webp",
        "duration": "Same-Day (Typically 4 Hours)",
        "who_its_for": "Individuals monitoring long-term diabetes control.",
        "description": "Measures average blood glucose levels over the past 2–3 months to assess diabetes management.",
        "symptoms_related_to_test": "Used for monitoring, not symptom-based.",
        "result_interpretation": {
            "positive": "High HbA1c indicates poor blood sugar control.",
            "negative": "Normal HbA1c indicates good diabetes management."
        },
        "features": [
            "Reflects long-term glucose control",
            "No fasting required",
            "Essential for diabetes management"
        ],
        "insight_and_action_plan": {
            "next_steps": "If high, adjust diet, medication, or exercise plan.",
            "prevention_tip": "Maintain regular glucose checks and balanced lifestyle."
        }
    },
    {
        "id": 69,
        "category": "Endocrinology",
        "name": "Free Triiodothyronine (Free T3) Test",
        "price": 18000,
        "image": "./images/FT3.webp",
        "duration": "24 Hours",
        "who_its_for": "Individuals with suspected thyroid imbalance or metabolic disorder.",
        "description": "Measures the amount of free triiodothyronine hormone in blood to assess thyroid gland activity.",
        "symptoms_related_to_test": "Fatigue, weight changes, anxiety, or temperature sensitivity.",
        "result_interpretation": {
            "positive": "Abnormal levels indicate hyperthyroidism or hypothyroidism.",
            "negative": "Normal levels show balanced thyroid function."
        },
        "features": [
            "Evaluates thyroid performance",
            "Useful alongside T4 and TSH tests",
            "Monitors treatment response"
        ],
        "insight_and_action_plan": {
            "next_steps": "Correlate results with TSH and Free T4 for full thyroid evaluation.",
            "prevention_tip": "Maintain adequate iodine intake and manage stress."
        }
    },
    {
        "id": 70,
        "category": "Endocrinology",
        "name": "Thyroid Stimulating Hormone (TSH) Test",
        "price": 18000,
        "image": "./images/TSH.webp",
        "duration": "24 Hours",
        "who_its_for": "Individuals with thyroid disease, fatigue, or metabolic symptoms.",
        "description": "Measures TSH levels to assess thyroid gland regulation and pituitary feedback control.",
        "symptoms_related_to_test": "Fatigue, weight gain, mood swings, or temperature sensitivity.",
        "result_interpretation": {
            "positive": "High TSH suggests hypothyroidism; low TSH suggests hyperthyroidism.",
            "negative": "Normal TSH indicates proper thyroid function."
        },
        "features": [
            "Key test for thyroid assessment",
            "Guides diagnosis of thyroid disorders",
            "Monitors hormone therapy effectiveness"
        ],
        "insight_and_action_plan": {
            "next_steps": "Abnormal TSH should be correlated with T3 and T4 results.",
            "prevention_tip": "Maintain thyroid health through balanced diet and routine screening."
        }
    },
    {
        "id": 71,
        "category": "Microbiology/Infectious Disease",
        "name": "Wound Swab Culture and Sensitivity (WOUND SWAB C/S)",
        "price": 10000,
        "image": "./images/WOUND_SWAB_CS.webp",
        "duration": "48–72 Hours",
        "who_its_for": "Patients with infected wounds, abscesses, or slow-healing sores.",
        "description": "Detects bacteria or fungi present in a wound and determines which antibiotics are most effective for treatment.",
        "symptoms_related_to_test": "Pus discharge, redness, swelling, persistent wound, or foul smell.",
        "result_interpretation": {
            "positive": "Confirms presence of infection and identifies causative organism.",
            "negative": "No bacterial growth detected."
        },
        "features": [
            "Identifies wound infection source",
            "Determines antibiotic sensitivity",
            "Guides targeted antimicrobial therapy"
        ],
        "insight_and_action_plan": {
            "next_steps": "If positive, begin antibiotic therapy as guided by sensitivity pattern.",
            "prevention_tip": "Keep wounds clean and covered; avoid self-medication with antibiotics."
        }
    },
    {
        "id": 72,
        "category": "Cardiac Bio-Markers / Inflammation",
        "name": "High Sensitivity C-Reactive Protein (hs-CRP)",
        "price": 18000,
        "image": "./images/hsCRP.webp",
        "duration": "24 Hours",
        "who_its_for": "Individuals at risk of cardiovascular disease or inflammation.",
        "description": "Measures low levels of C-reactive protein to detect early inflammation and assess heart disease risk.",
        "symptoms_related_to_test": "Fatigue, unexplained inflammation, or as part of heart health screening.",
        "result_interpretation": {
            "positive": "Elevated hs-CRP indicates increased inflammation or cardiovascular risk.",
            "negative": "Normal levels suggest low risk of systemic inflammation."
        },
        "features": [
            "Assesses cardiovascular inflammation",
            "Early predictor of heart disease risk",
            "Useful for chronic inflammatory monitoring"
        ],
        "insight_and_action_plan": {
            "next_steps": "Combine with lipid profile and blood pressure checks for full risk evaluation.",
            "prevention_tip": "Adopt anti-inflammatory diet, exercise regularly, and manage stress."
        }
    },
    {
        "id": 73,
        "category": "Logistics / Lab Operations",
        "name": "Reprocessing, Storage and Security (RSS)",
        "price": 5000,
        "image": "./images/RSS.webp",
        "duration": "Same-Day Service",
        "who_its_for": "Hospitals, clinics, and clients requiring secure specimen or data handling.",
        "description": "Covers the cost of safe handling, reprocessing, and secure storage of biological samples and reports.",
        "symptoms_related_to_test": "Not applicable (service-related).",
        "result_interpretation": {
            "positive": "Ensures compliant and traceable sample management.",
            "negative": "N/A"
        },
        "features": [
            "Secure biological sample storage",
            "Compliance with lab standards",
            "Traceable and auditable process"
        ],
        "insight_and_action_plan": {
            "next_steps": "Maintain proper documentation for all stored or reprocessed materials.",
            "prevention_tip": "Regularly audit storage protocols to prevent sample degradation."
        }
    },
    {
        "id": 74,
        "category": "Biochemistry",
        "name": "Uric Acid Test (UR-ACID)",
        "price": 18000,
        "image": "./images/URIC_ACID.webp",
        "duration": "Same-Day (Typically 4 Hours)",
        "who_its_for": "Individuals with joint pain, gout, or kidney stone history.",
        "description": "Measures uric acid levels in the blood to evaluate gout, kidney function, and metabolic balance.",
        "symptoms_related_to_test": "Joint swelling, sharp pain (especially in big toe), or urinary discomfort.",
        "result_interpretation": {
            "positive": "High uric acid suggests gout, kidney dysfunction, or metabolic disorder.",
            "negative": "Normal levels indicate balanced uric metabolism."
        },
        "features": [
            "Assesses gout risk",
            "Monitors kidney and metabolic health",
            "Useful for ongoing treatment evaluation"
        ],
        "insight_and_action_plan": {
            "next_steps": "High results may require dietary modification and medication.",
            "prevention_tip": "Stay hydrated, limit red meat, alcohol, and sugary drinks."
        }
    }
];
