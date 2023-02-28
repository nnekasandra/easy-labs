from model import *
def populate_db():
    # Experiment template 1
    experiment_structure1 = ExperimentStructure(
        title="Dose Response Curve Of Acetylcholine", 
        aim="To study the Dose Response Curve of Acetylcholine in the Rectus Abdominal Muscle of Frog",
        apparatus="Reservoir, tubing, hemostatic forceps, isolated organ bath, aeration tube, isotonic frontal writing lever,recording drum",
        theory="The dose-response relationship is the magnitude of the response of an organism as a function of exposure (or doses) to a stimulus or stressor (usually a chemical) after a certain exposure time. Studying dose response, and developing dose–response models, is central to determining beneficial levels and dosages for drugs, pollutants, foods, and other substances to which humans or other organisms are exposed",  
        procedure="The frog is placed in a tray with ventral side facing up. The skin is incised longitudinally in the middle of abdomen from pubic symphysis to the sternum. Two recti are situated on the either sides of the midline. They are dissected out by cutting its attachment from pubic symphysis from below, sternum from above and abdominal muscles from sides. The recti can be easily differentiated from other muscles because the recti are white and shiny whereas other muscles are pinkish in color.",    
        result_discussion="Plot dose Vs Response It would return a parabola curve  Plot Log Dose Vs Response curve which returns a Sigmoid line",    
        conclusion="Nicotinic Receptors are present in the skeletal muscle where Acetylcholine produces contraction of the muscle through the stimulation of nicotinic receptors.",    
        precautions="Ensure to accurately measure drug doses."  
        )

    db.session.add(experiment_structure1)
    field1 = Fields(
        field_name="Dose",
        experiment_structure_id = 1
    )                        
    field2 = Fields(
        field_name="Log Dose",
        experiment_structure_id = 1
    )
    field3 = Fields(
        field_name="Response (mm)",
        experiment_structure_id = 1
    )
    field4 = Fields(
        field_name="Response (%)",
        experiment_structure_id = 1
    )
    db.session.add_all([field1, field2, field3, field4])

    # Experiment template 2
    procedure_items = [
    "1.Set up kymograph and drum machine as in water bath procedure"
    "2.The frog is sacrificed as per CPCSEA recommended guidelines and the abdominal and thoracic cavities are opened to the heart."
    "3.The frog is placed on the frog's board and it is tied to it. Pericardium over the heart is removed and the inferior venacava is exposed and a thread is passed under it."
    "4.A small 'V' shaped cut is given in inferior venacava and the venous cannula is passed in to it and is tied firmly. Immediately both aortae are cut just before they form branches."
    "5.Apex of the heart is taken attached to the lever and the tension is adjusted such that it gives maximum amplitude of concentration."
    "6.After taking normal record for about 2-3 cms, calcium chloride, potassium chloride acetylcholine, adrenaline are given sequently in graded dose and observe the response.",
    ]
    result_discussion_items =[
    "1. CaCl2 in low dose (< 1%) increase heart rate (Positive Chronotropic) and force (Positive ionotropic) of contraction but in high dose it inhibits the heart in systole characterized by straight line recording on upper margin."
    "2. KCl in low dose (< 1%) Decreased heart rate (Negative Chronotropic) and force (Negative ionotropic) of contraction but in high dose it inhibits the heart in Diastole characterized by straight line recording on lower margin."
    "3. Acetylcholine (Ach) in low dose reduces heart rate (Negative Chronotropic) and force (Negative ionotropic) of contraction but in high dose it inhibits the heart in Diastole characterized by straight line recording on lower margin."
    "4. Adrenaline in low dose increase heart rate (Positive Chronotropic) and force (Positive ionotropic) of contraction but in high dose it inhibits the heart in systole characterized by straight line recording on upper margin."
    ]
    experiment_structure2 = ExperimentStructure(
        title = "Determination of the Effects of drugs on the heart rate",
        aim = "To study the effect of K+, Ca++, Acetylcholine and Adrenaline on frog's heart",
        apparatus = "Reservoir, Starling's Heart lever, Sherrington's Revolving drum machine, Kymograph, Syme's Cannula, Beaker, Thread, Tray, Dissection box.",
        theory = "Acetylcholine (ACh) released on vagal stimulation reduces the heart rate by increasing K+ conductance of pacemaker cells in the sinoatrial (S-A) node. Fluctuation analysis of ACh-activated currents in pacemaker tissue showed this to be due to opening of a separate class of K+ channels gated by muscarinic ACh receptors (m-AChRs).",
        procedure = '|'.join(procedure_items),
        result_discussion =  '|'.join(result_discussion_items),
        conclusion = "Drugs affect heart rate",
        precautions = "Ensure to accurately measure drug doses"
    )
    db.session.add(experiment_structure2)
    experiment_structure2_field1 = Fields(
        field_name="Drug",
        experiment_structure_id = 2
    )  
    experiment_structure2_field2 = Fields(
        field_name="Dose",
        experiment_structure_id = 2
    )  
    experiment_structure2_field3 = Fields(
        field_name="Heart rate(Beats/min)",
        experiment_structure_id = 2
    )  
    experiment_structure2_field4 = Fields(
        field_name="Amplitude",
        experiment_structure_id = 2
    )  
    experiment_structure2_field5 = Fields(
        field_name="Tone",
        experiment_structure_id = 2
    )  
    db.session.add_all([experiment_structure2_field1, experiment_structure2_field2, experiment_structure2_field3, experiment_structure2_field4, experiment_structure2_field5])
    db.session.commit()
    print('populated successfully')