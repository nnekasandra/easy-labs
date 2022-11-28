import "./style.css";
import Table from "../components/table";
import { Results } from "../components/tableedit";
const FirstPractical = () => {
  return (
    <section className="lg:px-24 px-10">
      <div className="py-5">
        <h2 className="text-blue underline text-center text-2xl font-bold">
          Title
        </h2>
        <p className="text-2xl text-center pt-5">
          Animals Used for Experimental Pharmacology
        </p>
      </div>
      <div className="py-5">
        <h2 className="font-bold text-blue underline text-center text-2xl">
          Aim
        </h2>
        <p className="text-2xl text-center pt-5">
          To Study The Dose Responsive Curve of Acetylcholine on Rectus
          Abdominal Muscle of Frog
        </p>
      </div>
      <section>
        <h2 className="text-blue underline text-center text-2xl font-bold">
          Theory
        </h2>
        <p className="text-2xl text-center pt-5">
          Graded Dose Response Relationship Curve of Acetylcholine on Frog
          Rectus Muscle.
        </p>
        <p className="text-xl">Here,</p>
        <p className="text-xl py-5">
          Single biological unit, either a single animal or an isolated tissue
          is used.
        </p>
        <p className="text-xl">
          It depends upon an observation that graded increase (in geometric
          proportion) in the dose of drug gives proportional rise in the
          magnitude of biological response.
        </p>
        <p className="text-xl py-5">
          Actually, beyond a specific dose level, biological response increases
          in proportion to the increase in dose. This dose level is known as
          'Threshold dose'.
        </p>
        <p className="text-xl">
          Such proportional rise in biological response occurs only up to a dose
          level known as 'Ceiling dose', beyond which a steady biological
          response is achieved even after increasing the doses.
        </p>
        <p className="text-xl py-5">
          Shape of Graded DRC, when plotted as 'dose Vs Response' is a
          'Parabola'
        </p>
        <p className="text-xl">
          Shape of 'Log Dose Vs Response' curve is a 'Sigmoid' line or is having
          'S' like shape
        </p>
      </section>
      <section>
        <h3 className="text-blue underline text-center text-2xl font-bold my-5">
          Apparatus
        </h3>
        <ul className="apparatus">
          <li>Reservoir</li>
          <li>Tubing</li>
          <li>Hemostatic forceps</li>
          <li>Isolated organ bath</li>
          <li>Aeration tube</li>
          <li>Isotonic frontal</li>
          <li>Recording drum</li>
          <li>Writing lever</li>
        </ul>
        <div className="grid lg:grid-cols-3 gap-10 grid-rows-2">
          <figure>
            <img
              src="/images/pss-reservoir.webp"
              alt="physiological salt solution reservior"
            />
            <figcaption>Reservoir</figcaption>
          </figure>
          <figure>
            <img
              src="/images/haemostatic-forceps.jpg"
              alt="Hemostatic Forcep"
            />
            <figcaption>Hemostatic Forcep</figcaption>
          </figure>
          <figure>
            <img
              src="/images/isolated-organ-bath.jpg"
              alt="Isolated organ Bath"
            />
            <figcaption>Isolated organ Bath</figcaption>
          </figure>
          <figure>
            <img src="/images/Isotonic-Solution.jpg" alt="Isotonic-Solution" />
            <figcaption>Isotonic-Solution</figcaption>
          </figure>
          <figure>
            <img src="/images/recording drum.jpeg" alt="Recording drum" />
            <figcaption>Recording drum</figcaption>
          </figure>
          <figure>
            <img src="/images/aeration tube.webp" alt="Aeration tube" />
            <figcaption>Aeration tube</figcaption>
          </figure>
          <figure>
            <img src="/images/images.jpg" alt="Writing Lever" />
            <figcaption>Writing Lever</figcaption>
          </figure>
        </div>
        <div className="py-5">
          <h2 className="text-blue underline text-center text-2xl font-bold my-5">
            Experimental Condition
          </h2>
          <p className="text-xl py-5">
            Physiological Salt solution (PSS) : Frog's ringer
          </p>
          <p className="text-xl">Temperature : 37 (+ or -) 10C</p>
          <p className="text-xl py-5">
            Aeration : Carbogen (95% O<sub>2</sub> and 5% CO<sub>2</sub>)
          </p>
          <p className="text-xl">Basal tension on the tissue : 1 gm</p>
          <p className="text-xl py-5">
            Magnification of the response : 10 times
          </p>
          <p className="text-xl">
            Drug : Acetylcholine Chloride (1, 10 or 100 μg/mL)
          </p>
          <p className="text-xl py-5">Molecular weight of drug : 181.78</p>
        </div>
        <div className="flex items-center justify-center py-10 flex-col">
          <iframe
            width="50%"
            height="400"
            src="https://www.youtube.com/embed/4jUw6mkYoTU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="text-2xl py-5">Video Representation on how to set up an Organ Bath</p>
        </div>
      </section>
      <section>
        <h2 className="text-blue underline text-center text-2xl font-bold my-5">
          Procedures
        </h2>
        <ol className="ordered">
          <li>
            The assembly is set up and the arrangements are made for the above
            mentioned condition
          </li>
          <li>A frog is sacrificed as per CPCSEA recommended guidelines</li>
          <li>
            The frog is placed in a tray with ventral side facing up. The skin
            is incised longitudinally in the middle of abdomen from pubic
            symphysis to the sternum. Two recti are situated on the either sides
            of the midline. They are dissected out by cutting its attachment
            from pubic symphysis from below, sternum from above and abdominal
            muscles from sides. The recti can be easily differentiated from
            other muscles because the recti are white and shiny whereas other
            muscles are pinkish in color.
          </li>
          <li>
            Two recti are separated from the midline and one recus muscle is
            mounted in the organ bath. One end of the muscle is tied to the
            aeration tube and the other is connected to the isolated frontal
            writing lever.
          </li>
          <li>
            The tissue is allowed to stabilize for half an hour. During this
            period the PSS is changed after every ten min. once the tissue is
            stabilize, graded doses of Ach are added to at defined time period
            of interval for obtain contractile responses.
            <ol className="sub-list">
              <li>00 sec: Start the drum and record a base line for 30 sec.</li>
              <li>
                30 sec: Add the first dose of drug in organ bath and take the
                response for another 30sec.
              </li>
              <li>
                60: Stop the drum and give wash until the tip of lever rich to
                baseline
              </li>
              <li>Continue above procedure for next doses.</li>
            </ol>
          </li>
          <li>
            Measure the height of concentration at different doses of Ach.
          </li>
          <li>
            Tabulate the observations into three columns as Dose of Ach, Height
            of concentration (in mm) and % response.
          </li>
        </ol>
      </section>
      <section>
        <h2 className="text-blue underline text-center text-2xl font-bold my-5">
          Result Presentation
        </h2>
        <img
          src="/images/graph.jpg"
          alt="graphical representation of readings"
          className="py-10 w-full"
        />
        <p className="text-xl py-5">From the graph above, the following readings were tabulated.</p>
        <div>
          <p className="text-xl font-bold">Standard Example</p>
          <Table />
        </div>
        <div>
          <p className="text-xl font-bold">Observed Result</p>
          <Results />
        </div>
      </section>
      <section>
        <h2 className="text-blue underline text-center text-2xl font-bold my-5">
          Result Discussion
        </h2>
        <p>Plot dose Vs Response It would return a parabola curve</p>
        <p>Plot Log Dose Vs Response curve which returns a Sigmoid line</p>
      </section>
      <section>
        <h2 className="text-blue underline text-center text-2xl font-bold my-5">
          Conclusion
        </h2>
        <p>
          Nicotinic Receptors are present in the skeletal muscle where
          Acetylcholine produces contraction of the muscle through the
          stimulation of nicotinic receptors.
        </p>
      </section>
      <section className="precaution">
        <h2 className="text-blue underline text-center text-2xl font-bold my-5">
          Precautions
        </h2>
        <ol className="text-xl py-10">
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
            If the desired response is not obtained with 0.1ml of Ach then the
            dose should be increased.
          </li>
          <li>
            The number of washing and interval between them should be kept
            constant.
          </li>
        </ol>
      </section>
    </section>
  );
};
export default FirstPractical;
