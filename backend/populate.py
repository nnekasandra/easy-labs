from model import *
def populate_db():
    experiment_structure1 = ExperimentStructure(
        title="Dose Response Curve Of Acetylcholine", 
        aim="To study the Dose Response Curve of Acetylcholine in the Rectus Abdominal Muscle of Frog",
        apparatus="Reservoir, tubing, hemostatic forceps, isolated organ bath, aeration tube, isotonic frontal writing lever,recording drum",
        theory="The dose–response relationship is the magnitude of the response of an organism as a function of exposure (or doses) to a stimulus or stressor (usually a chemical) after a certain exposure time. Studying dose response, and developing dose–response models, is central to determining beneficial levels and dosages for drugs, pollutants, foods, and other substances to which humans or other organisms are exposed",  
        procedure="The frog is placed in a tray with ventral side facing up. The skin is incised longitudinally in the middle of abdomen from pubic symphysis to the sternum. Two recti are situated on the either sides of the midline. They are dissected out by cutting its attachment from pubic symphysis from below, sternum from above and abdominal muscles from sides. The recti can be easily differentiated from other muscles because the recti are white and shiny whereas other muscles are pinkish in color.",    
        result_discussion="Plot dose Vs Response It would return a parabola curve  Plot Log Dose Vs Response curve which returns a Sigmoid line",    
        conclusion="Nicotinic Receptors are present in the skeletal muscle where Acetylcholine produces contraction of the muscle through the stimulation of nicotinic receptors.",    
        precautions="Ensure to accurately measure drug doses."  
                            )

    db.session.add(experiment_structure1)

    experiment1 = Experiment(
        experiment_structure_id = 1,
        title="Dose Response Curve Of Acetylcholine", 
        aim="To study the Dose Response Curve of Acetylcholine in the Rectus Abdominal Muscle of Frog",
        apparatus="Reservoir, tubing, hemostatic forceps, isolated organ bath, aeration tube, isotonic frontal writing lever,recording drum",
        theory="The dose–response relationship is the magnitude of the response of an organism as a function of exposure (or doses) to a stimulus or stressor (usually a chemical) after a certain exposure time. Studying dose response, and developing dose–response models, is central to determining beneficial levels and dosages for drugs, pollutants, foods, and other substances to which humans or other organisms are exposed",  
        procedure="The frog is placed in a tray with ventral side facing up. The skin is incised longitudinally in the middle of abdomen from pubic symphysis to the sternum. Two recti are situated on the either sides of the midline. They are dissected out by cutting its attachment from pubic symphysis from below, sternum from above and abdominal muscles from sides. The recti can be easily differentiated from other muscles because the recti are white and shiny whereas other muscles are pinkish in color.",    
        result_discussion="Plot dose Vs Response It would return a parabola curve  Plot Log Dose Vs Response curve which returns a Sigmoid line",    
        conclusion="Nicotinic Receptors are present in the skeletal muscle where Acetylcholine produces contraction of the muscle through the stimulation of nicotinic receptors.",    
        precautions="Ensure to accurately measure drug doses."
    )                       

    field1 = Fields(
        field_name="dose",
        experiment_structure_id = 1
    )                        
    field2 = Fields(
        field_name="log dose",
        experiment_structure_id = 1
    )
    value1 = Values(
        value = 20,
        field_id = 1,
        experiment_id = 1
    )                        
    value2 = Values(
        value = 25,
        field_id = 2,
        experiment_id = 1
    ) 

    db.session.add_all([experiment1])
    db.session.add_all([field1, field2])
    db.session.add_all([value1, value2])

    db.session.commit()
    print('populated successfully')