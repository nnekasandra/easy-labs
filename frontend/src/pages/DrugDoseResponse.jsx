import { ImageDisplay } from "../components/ImageDisplay";
import { Link } from "react-router-dom";
import Table from "../components/table";
const DrugDoseResponse = () => {
  return (
    <section className="p-10">
      <h1 className="text-center text-3xl">
        Experiment to Determine the Dose-Response Curve in Drugs
      </h1>
      <p>
        This Page serves as guidline to perform experiment to start recording,
        click below{" "}
      </p>
      <div>
        <Link to="/practicals/dose-response/record">
          <button className="bg-lightest border rounded-lg p-3 text-lg font-bold">
            Record Experiment
          </button>
        </Link>
      </div>
      <div className="p-16">
        <div className="py-5 border-b">
          <h3 className="text-2xl font-bold">Title</h3>
          <p className="text-lg tracking-wider">
            Determination of Dose Response Curve of Acetylcholine
          </p>
        </div>
        <div className="py-5 border-b">
          <h3 className="text-2xl font-bold">Aim</h3>
          <p className="capitalise text-lg tracking-wider">
            To Study the Dose Response Curve of Acetylcholine on Rectus
            Abdominal Muscle of Frog
          </p>
        </div>
        <div className="py-5 border-b">
          <h3 className="text-2xl font-bold">Theory</h3>
          <p className="text-lg tracking-wider">
            The dose–response relationship is the magnitude of the response of
            an organism, as a function of exposure (or doses) to a stimulus or
            stressor (usually a chemical) after a certain exposure time.
            Studying dose response, and developing dose–response models, is
            central to determining "safe", "hazardous" and (where relevant)
            beneficial levels and dosages for drugs, pollutants, foods, and
            other substances to which humans or other organisms are exposed
          </p>
          <p className="text-lg tracking-wider py-5">
            A dose–response curve is a coordinate graph relating the magnitude
            of a dose (stimulus) to the response of a biological system. A
            number of effects (or endpoints) can be studied. The applied dose is
            generally plotted on the X axis and the response is plotted on the Y
            axis. Log dose can also be plotted against the percentage response.
          </p>
          <p className="text-lg tracking-wider">
            Shape of Graded DRC, when plotted as ‘dose Vs Response’ is a
            ‘Parabola’  Shape of ‘Log Dose Vs Response’ curve is a ‘Sigmoid’
            line or is having ‘S’ like shape. The EC50 is determined from the
            graph through the steepest point of the graph. This is the degree to
            which the drug is toxic or safe.
          </p>
        </div>
        <div className="py-5 border-b">
          <h3 className="text-2xl font-bold">Apparatus</h3>
          <div>
            <ul className="text-lg tracking-wider apparatus">
              <li>Reservoir</li>
              <li>Tubing</li>
              <li>Hemostatic forceps</li>
              <li>Isolated organ bath</li>
              <li>Aeration tube</li>
              <li>Isotonic frontal</li>
              <li>Recording drum</li>
              <li>Writing lever</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <ImageDisplay
              source="/images/pss-reservoir.webp"
              alt="physiological salt solution reservior"
              caption="Reservoir"
            />
            <ImageDisplay
              source="/images/haemostatic-forceps.jpg"
              alt="Hemostatic Forcep"
              caption="Hemostatic Forcep"
            />
            <ImageDisplay
              source="/images/isolated-organ-bath.jpg"
              alt="Isolated Organ Bath"
              caption="Isolated Organ Bath"
            />
            <ImageDisplay
              source="/images/Isotonic-Solution.jpg"
              alt="Isotonic Solution"
              caption="Isotonic Solution"
            />
            <ImageDisplay
              source="/images/recording drum.jpeg"
              alt="Recording Drum"
              caption="Recording Drum"
            />
            <ImageDisplay
              source="/images/aeration tube.webp"
              alt="Aeration Tube"
              caption="Aeration Tube"
            />
            <ImageDisplay
              source="/images/images.jpg"
              alt="Writing Lever"
              caption="Writing Lever"
            />
          </div>
          <div className="flex items-center justify-center py-10 flex-col">
            <iframe
              width="50%"
              height="400"
              src="https://www.youtube.com/embed/4jUw6mkYoTU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-2xl py-5">
              Video Representation on how to set up an Organ Bath
            </p>
          </div>
        </div>
        <div className="py-5 border-b">
          <h3 className="text-2xl font-bold">Procedure</h3>
          <div>
            <ol className="ordered pl-5">
              <li>
                The assembly is set up and the arrangements are made for the
                above mentioned condition
              </li>
              <li>A frog is sacrificed as per CPCSEA recommended guidelines</li>
              <li>
                The frog is placed in a tray with ventral side facing up. The
                skin is incised longitudinally in the middle of abdomen from
                pubic symphysis to the sternum. Two recti are situated on the
                either sides of the midline. They are dissected out by cutting
                its attachment from pubic symphysis from below, sternum from
                above and abdominal muscles from sides. The recti can be easily
                differentiated from other muscles because the recti are white
                and shiny whereas other muscles are pinkish in color.
              </li>
              <li>
                Two recti are separated from the midline and one recus muscle is
                mounted in the organ bath. One end of the muscle is tied to the
                aeration tube and the other is connected to the isolated frontal
                writing lever.
              </li>
              <li>
                The tissue is allowed to stabilize for half an hour. During this
                period the PSS is changed after every ten min. once the tissue
                is stabilize, graded doses of Ach are added to at defined time
                period of interval for obtain contractile responses.
                <ol className="sub-list">
                  <li>
                    00 sec: Start the drum and record a base line for 30 sec.
                  </li>
                  <li>
                    30 sec: Add the first dose of drug in organ bath and take
                    the response for another 30sec.
                  </li>
                  <li>
                    60: Stop the drum and give wash until the tip of lever rich
                    to baseline
                  </li>
                  <li>Continue above procedure for next doses.</li>
                </ol>
              </li>
              <li>
                Measure the height of concentration at different doses of Ach.
              </li>
              <li>
                Tabulate the observations into three columns as Dose of Ach,
                Height of concentration (in mm) and % response.
              </li>
            </ol>
          </div>
        </div>
        <div className="py-5 border-b">
          <h3 className="text-2xl font-bold">Result Presentation</h3>
          <div>
            <p className="text-xl font-bold">Standard Example</p>
            <Table />
          </div>
        </div>
        <div className="py-5 border-b">
          <h2 className="text-2xl font-bold">Result Discussion</h2>
          <p className="text-lg tracking-wider">
            Plot dose Vs Response It would return a parabola curve
          </p>
          <p className="text-lg tracking-wider">
            Plot Log Dose Vs Response curve which returns a Sigmoid line
          </p>
        </div>
        <div className="py-5 border-b">
          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p className="text-lg tracking-wider">
            Nicotinic Receptors are present in the skeletal muscle where
            Acetylcholine produces contraction of the muscle through the
            stimulation of nicotinic receptors.
          </p>
        </div>
        <div className="py-5 border-b">
          <h3 className="text-2xl font-bold">Precautions</h3>
          <div>
            <ol className="text-lg tracking-wider">
              <li>Ensure to accurately measure drug doses.</li>
              <li>Ensure frog rectus is properly aerated.</li>
              <li>Make sure to avoid paralax error while measuring response</li>
              <li>Ensure to properly set up organ bath.</li>
              <li>Ensure to take timely readings.</li>
              <li>
                A steady Oxygen should be passed in the bath to avoid tissue
                destruction.
              </li>
              <li>
                If the desired response is not obtained with 0.1ml of Ach then
                the dose should be increased.
              </li>
              <li>
                The number of washing and interval between them should be kept
                constant.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="px-20">
        <Link to="/practicals/dose-response/record">
          <button className="bg-lightest border rounded-lg p-3 text-lg font-bold">
            Record Experiment
          </button>
        </Link>
      </div>
    </section>
  );
};
export default DrugDoseResponse;