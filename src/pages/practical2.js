import { ImageDisplay } from "../components/imaged";
import "./style.css";
export const PracticalTwo = ()=>{
    return (
      <section className="lg:px-24 px-10">
        <h2 className="text-blue underline text-center text-2xl font-bold">
          Title
        </h2>
        <p>Animals Used For Experimental Pharmacology</p>
        <h2 className="text-blue underline text-center text-2xl font-bold">
          Aim
        </h2>
        <p>
          To Introduce and Describe Animals Used in Experimental Pharmacology
        </p>
        <section>
          <h2>Theory</h2>
          <p>
            Experimental pharmacology is the aspect of pharmacology that deals
            with testing the effects of drugs at different stages of production
            before administration.
          </p>
          <p>
            Use of Animals are inevitable as different animals have the specific
            use they are suited for in pharmacology.
          </p>
          <p>
            Different species of laboratory animals are used in experimental
            pharmacology to investigate dose -biological response relationship
            and pharmacokinetic of different test substances.
          </p>
        </section>
        <section>
          <h2 className="text-blue underline text-center text-2xl font-bold">
            Apparatus
          </h2>
          <p>Frog</p>
          <p>Rat</p>
          <p>Guinea Pig</p>
          <p>Mouse</p>
          <p>Rabbit</p>
          <p>Hamster</p>
          <div className="grid lg:grid-cols-3 gap-10">
            <ImageDisplay
              source="/images/frog-main.jpg"
              alt="a frog in a stream"
              caption="Frog"
            />
            <ImageDisplay source="/images/rat.jpg" alt="rat" caption="Rat" />
            <ImageDisplay
              source="/images/guinea-pig.jpg"
              alt="guinea pig"
              caption="Guinea Pig"
            />
            <ImageDisplay source="/images/mice.jpg" alt="mice" caption="Mice" />
            <ImageDisplay
              source="/images/rabbit.jpg"
              alt="rabbit"
              caption="Rabbit"
            />
            <ImageDisplay
              source="/images/hamster.jpg"
              alt="hamster"
              caption="Hamster"
            />
          </div>
        </section>
        <section>
          <h2 className="text-blue underline text-center text-2xl font-bold">
            Result Presentation
          </h2>
          <div className="table py-10" style={{ "overflow-x": "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>Animal Name</th>
                  <th>Biological Name</th>
                  <th>Common Strain Used</th>
                  <th>Specific Characteristics</th>
                  <th>Uses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Frog</td>
                  <td>Rana Tigrina</td>
                  <td>
                    <ol>
                      <li>Rana esculenta</li>
                      <li>Rana pipiens</li>
                      <li>Rana temporaria</li>
                    </ol>
                  </td>
                  <td>
                    Frog is a cold blooded amphibian. It has three chambers in
                    its heart, two auricles and one ventricle.
                  </td>
                  <td>
                    <ul>
                      <li>
                        Study of isolated tissue like rectus, abdominis muscle,
                        heart, sciatic nerve preparation etc
                      </li>
                      <li>
                        To study the effect of drug acting on central nervous
                        system, neuromuscular junction and heart.
                      </li>
                      <li>
                        Whole frog is also used in screening of certain drugs
                        like anesthetics.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Rat</td>
                  <td>Rattus Norvegicus.</td>
                  <td>
                    <ol>
                      <li>Albino rats of wistar strain</li>
                      <li>Sprague-Dawley</li>
                      <li>Wistar Kyoto</li>
                      <li>Lewis</li>
                      <li>Porton</li>
                    </ol>
                  </td>
                  <td>
                    <p>
                      Rat is a warm blooded rodent. It can’t vomit and does not
                      possess the vomiting center. It has no tonsil and
                      gallbladder in its body.
                    </p>
                    <p>
                      Hence it can’t be used in screening of the drugs having
                      activities on vomiting center, or gall bladder.
                    </p>
                    <p>
                      Rat is omnivorous animal. It shows resistance to the
                      effects of cardiac glycosides.
                    </p>
                  </td>
                  <td>
                    <ul>
                      <li>Psychopharmacological Studies.</li>
                      <li>Study of analgesics and anticonvulsants.</li>
                      <li>
                        Bioassay of various hormones such as insulin, oxytocin,
                        vasopressin etc.
                      </li>
                      <li>
                        Study of estrus cycle, mating behaviour and lactation.
                      </li>
                      <li>
                        Studies on isolated tissue preparations like uterus,
                        stomach, vasdeferens, anoccoccygeus muscle, fundus
                        strip, aortic strip, heart rate etc.
                      </li>
                      <li>Chronic study on blood pressure.</li>
                      <li>Gastric acid secretion studies.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Guinea Pig</td>
                  <td>Cavia Procellus</td>
                  <td>
                    <ol>
                      <li>Search!!!</li>
                      <li>Sprague-Dawley</li>
                      <li>Wistar Kyoto</li>
                      <li>Lewis</li>
                      <li>Porton</li>
                    </ol>
                  </td>
                  <td>
                    <p>
                      It is a docile animal susceptible to anaphylaxis and
                      tuberculosis.
                    </p>
                    <p>Highly sensitive to histamine and penicillin.</p>
                    <p>Guinea pig is a warm blooded rodent.</p>
                    <p>First point of call in testing drugs.</p>
                  </td>
                  <td>
                    <ul>
                      <li>Evaluation of bronchodilators</li>
                      <li>Anaphylactic and immunological studies.</li>
                      <li>Study of histamine and anti histamines.</li>
                      <li>Bioassay of digitalis.</li>
                      <li>Evaluation of local anesthetics.</li>
                      <li>Hearing experiments because of sensitive cochlea.</li>
                      <li>
                        Study in isolated tissue specially, ileum, tracheal
                        chain, vas deferens, teania coli, hearts etc.
                      </li>
                      <li>
                        Study of tuberculosis and ascorbic acid metabolism.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Mouse</td>
                  <td>mus musculus</td>
                  <td>
                    <ol>
                      <li>Laca</li>
                      <li>balb-c</li>
                      <li>Swiss Albino</li>
                    </ol>
                  </td>
                  <td>
                    <p>
                      It is a warm blooded rodent, very sensitive to the
                      sedative effects of hexobarbitone.
                    </p>
                    <p>
                      Mouse is most wide used animal in different toxicity
                      studies
                    </p>
                    <p>They are smallest, cheap and easy to handle.</p>
                  </td>
                  <td>
                    <ul>
                      <li>Bioassay of Insulin.</li>
                      <li>Toxicological and teratogenic study.</li>
                      <li>Screening of analgesic and anticonvulsants.</li>
                      <li>Screening of chemotherapeutics agents.</li>
                      <li>Study related to genetic and cancer research.</li>
                      <li>Study of Drugs acting on central nervous system.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Rabbit</td>
                  <td>Oryctolagus cuniculus</td>
                  <td>
                    <ol>
                      <li>New Zealand White</li>
                      <li>Himalayan Black.</li>
                    </ol>
                  </td>
                  <td>
                    <p>A docile animal with large ears.</p>
                    <p>Rabbit is a warmed blooded mammalian animal.</p>
                    <p>
                      Some strains of rabbit are resistance to effective of
                      atropine because they have higher concentration of
                      atropinase enzyme in their blood.
                    </p>
                  </td>
                  <td>
                    <ul>
                      <li>Pyrogen testing.</li>
                      <li>Bioassay of anti-diabetics and sex hormones.</li>
                      <li>Irritancy tests.</li>
                      <li>Study of drug used in glaucoma.</li>
                      <li>
                        Screening of agents affecting capillary permeability.
                      </li>
                      <li>Pharmacokinetics studies.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Hamster</td>
                  <td>Mesocriceius Auratus and Cricetulus Griseus</td>
                  <td>
                    <ol>
                      <li>Research!</li>
                      <li>Himalayan Black.</li>
                    </ol>
                  </td>
                  <td>
                    <p>they have short body with short legs and tail.</p>
                    <p>
                      The skin is loose and covered with dense short soft fur.
                    </p>
                    <p>
                      The cheeks pouches are prominent and extend upto the
                      shoulder region.
                    </p>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Chines hamsters have low chromosome number making it
                        useful for cytological investigations, genetics, tissue
                        culture and radiation research.
                      </li>
                      <li>Research on diabetes mellitus.</li>
                      <li>
                        Research related to virology, immunology and
                        implantation studies.
                      </li>
                      <li>Bioassay of prostaglandins.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            <ImageDisplay
              source="/images/frog-diagram.jpg"
              alt="a frog diagram"
              caption="Frog"
            />
            <ImageDisplay
              source="/images/rat-d.png"
              alt="Rat diagram"
              caption="Frog"
            />
          </div>
        </section>
      </section>
    );
}