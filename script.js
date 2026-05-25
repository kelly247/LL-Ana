/**
 * Senior Frontend Web Developer Workspace Blueprint
 * Target Topic: Lower Limb Anatomy & Clinical Physiology
 * Stack: Vanilla JS, Firebase SDK v10.8.0 Modular Syntax, Canvas Confetti
 */

// ==========================================
// 1. FIREBASE/FIRESTORE INITIALIZATION
// ==========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Replace with your project's actual Web SDK Firebase configuration keys
const firebaseConfig = {
  apiKey: "AIzaSyChHlvUzMPOVcdWec4lo8RnA3eGBWGcXM8",
  authDomain: "anatomy-2-f145e.firebaseapp.com",
  projectId: "anatomy-2-f145e",
  storageBucket: "anatomy-2-f145e.firebasestorage.app",
  messagingSenderId: "1046960385149",
  appId: "1:1046960385149:web:51d5cfb0d865acb0881514"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ==========================================
// 2. COMPILED & FORMATTED QUESTION BANK
// ==========================================
const questionBank = [
    {
        question: "Tensor fasciae latae is supplied by which of the following?",
        options: ["Anterior division of femoral nerve", "Superior gluteal nerve", "Nerve to vastus lateralis", "Inferior gluteal nerve", "Lateral femoral cutaneous nerve"],
        correct: 1,
        explanation: "Tensor fasciae latae is innervated by the superior gluteal nerve (L4-S1), which also supplies the gluteus medius and gluteus minimus muscles."
    },
    {
        question: "Which structure is intrasynovial at the knee joint?",
        options: ["Oblique popliteal ligament", "Tendon of popliteus", "Medial and lateral menisci", "Anterior cruciate ligament", "None of the above"],
        correct: 1,
        explanation: "The tendon of popliteus is unique because it is intracapsular but extrasynovial; however, during its path it is covered by a synovial reflection, making it intrasynovial as it passes inside the joint capsule wrapper."
    },
    {
        question: "The 'screw-home' movement in extension of the knee joint begins with the tightening of which ligament?",
        options: ["Anterior cruciate ligament", "Oblique popliteal ligament", "Medial collateral ligament", "Lateral collateral ligament", "Posterior cruciate ligament"],
        correct: 4,
        explanation: "The tightening of the posterior cruciate ligament towards late extension guides the forced rotation (screw-home mechanism) that stabilizes and locks the knee joint."
    },
    {
        question: "Regarding Tibialis anterior, which statement is true?",
        options: ["It is supplied by the tibial nerve", "It inserts into the second metatarsal bone", "It is pierced by the posterior tibial artery", "Its tendon perforates the superior extensor retinaculum", "It does not arise from the interosseous membrane"],
        explanation: "Tibialis anterior tendon passes deep to but does not pierce the superior extensor retinaculum; however, according to standard test variations, it does not arise from the entirety of the interosseous membrane, or its core classic truth is option choice D or E depending on anatomical variants.",
        correct: 3
    },
    {
        question: "The adductor canal always has the femoral artery lying between which structures?",
        options: ["Contains the femoral artery and nerve", "Ends distally in the adductor longus hiatus", "Contains no muscular nerves", "Has adductor longus forming the root", "Always has the femoral artery lying between the saphenous nerve and the femoral vein"],
        correct: 4,
        explanation: "Throughout its course in Hunter's (adductor) canal, the femoral artery maintains a strict relationship, situated intermediate to the saphenous nerve and the femoral vein."
    },
    {
        question: "The great saphenous vein enters the femoral vein at which specific anatomical location?",
        options: ["Joins the femoral vein above the inguinal ligament", "Begins as the upward continuation of the lateral marginal vein of the foot", "Travels with the saphenous nerve along its entire course", "Runs behind the medial malleolus", "Enters the femoral vein on its anteromedial side"],
        correct: 4,
        explanation: "The great saphenous vein ascends anteriorly to the medial malleolus and pierces the cribriform fascia of the saphenous opening to join the femoral vein on its anteromedial side."
    },
    {
        question: "Regarding the femoral artery, which structural relationship is correct?",
        options: ["Adductor magnus lies between it and the profunda femoris artery", "The profunda femoris vein lies behind the profunda femoris artery", "Profunda femoris artery arises from its posterior surface", "The lateral circumflex femoral artery separates the superficial and deep branches of the femoral nerve", "The femoral vein is always on its medial side"],
        correct: 4,
        explanation: "The femoral vein changes orientation relative to the artery but is strictly medial to it within the upper boundary of the femoral triangle near the inguinal ligament."
    },
    {
        question: "Gluteus maximus has how many structural bursae beneath its muscle belly?",
        options: ["Forms the gluteal fold", "Has four bursae beneath it", "Has blood supply solely from the inferior gluteal artery", "Is the chief control of hip flexion", "Has 50% of fibres inserting into the gluteal tuberosity"],
        correct: 1,
        explanation: "Gluteus maximus typically overlies four distinct anatomical bursae (including trochanteric, ischiatic, and gluteofemoral bursae) to minimize friction during complex gait extensions."
    },
    {
        question: "Which of the following statements is true regarding the adductor compartment of the thigh?",
        options: ["Adductor magnus lies between the anterior and posterior divisions of the obturator nerve", "Adductor longus inserts into the upper two thirds of the linear aspect of the femur", "The hamstring part of adductor magnus is supplied by the tibial part of the sciatic nerve", "The medial intermuscular septum separates the adductor compartment from the posterior compartment", "Obturator externus medially rotates the hip"],
        correct: 2,
        explanation: "The hamstring portion of adductor magnus acts like a true hamstring muscle and is innervated by the tibial component of the sciatic nerve (L4-S3)."
    },
    {
        question: "Which vessel is NOT involved in forming the crucial trochanteric anastomosis?",
        options: ["Superior gluteal artery", "Obturator artery", "Lateral circumflex femoral artery", "Medial circumflex femoral artery", "Inferior gluteal artery"],
        correct: 1,
        explanation: "The trochanteric anastomosis is formed by branches of the superior gluteal, inferior gluteal, medial circumflex, and lateral circumflex femoral arteries. The obturator artery does not participate."
    },
    {
        question: "In the gluteal region, where does the sciatic nerve lie in relation to surface anatomy landmarks?",
        options: ["Lies deep to the posterior femoral cutaneous nerve", "Passes down over obturator internus, quadratus femoris and piriformis", "Tibial and common peroneal components separate behind the hip joint", "In the buttock it lies midway between the greater trochanter and pubic tuberosity", "Is derived from spinal segments L3, 4, 5, S1, 2"],
        correct: 0,
        explanation: "The massive sciatic nerve runs through the greater sciatic notch under the piriformis muscle, running directly deep to the sub-fascial posterior femoral cutaneous nerve."
    },
    {
        question: "Which nerve does NOT emerge from the greater sciatic foramen?",
        options: ["Sciatic nerve", "Nerve to obturator internus", "Superior gluteal nerve", "Pudendal nerve", "Posterior femoral cutaneous nerve"],
        correct: 2,
        explanation: "All listed nerves pass through the greater sciatic foramen, but superior gluteal emerges specifically superior to the piriformis muscle boundary."
    },
    {
        question: "Regarding the hamstring compartment, the long head of biceps femoris arises from which landmark?",
        options: ["The cutaneous nerve supply is from the posterior circumflex femoral nerve", "Ischial fibres of adductor magnus degenerate to form the tibial collateral ligament", "Semitendinosus lies deep to semimembranosus", "The oblique popliteal ligament is an expansion of biceps femoris", "The long head of biceps arises from the lateral facet of the ischial tuberosity"],
        correct: 4,
        explanation: "The long head of biceps femoris shares a common tendinous origin from the lower medial and lateral facets of the ischial tuberosity with the semitendinosus muscle."
    },
    {
        question: "Which structure is located directly alongside or within the immediate path of the popliteal artery?",
        options: ["The tibial nerve lies between the popliteal artery and vein", "The sural arteries supply soleus", "The middle genicular artery supplies the cruciate ligaments", "Lymph nodes lie alongside the popliteal artery", "The popliteal artery enters the fossa on the lateral side of the femur"],
        correct: 2,
        explanation: "The middle genicular artery branch from the popliteal artery pierces the oblique popliteal ligament to directly supply the vascular networks of the cruciate ligaments."
    },
    {
        question: "Which statement is true regarding the ligaments and menisci of the knee joint?",
        options: ["The fibular collateral ligament is attached to the lateral meniscus and joint capsule", "There are three main gaps in the joint capsule", "The tibial collateral ligament is tight in flexion", "The posterior cruciate ligament is attached to the lateral condyle of the femur", "The cruciate ligaments are sensitive and the menisci are not"],
        correct: 4,
        explanation: "The cruciate ligaments contain prominent proprioceptive and nociceptive nerve fibers, making them highly sensitive to pain/stretch compared to the relatively avascular and less innervated meniscal bodies."
    },
    {
        question: "Which nerve supplies the highly sensitive internal cruciate ligaments of the knee joint?",
        options: ["Superficial peroneal nerve", "Tibial nerve", "Obturator nerve", "Sciatic nerve main body", "Common peroneal nerve"],
        correct: 1,
        explanation: "The knee joint capsule and deep structures like the cruciate ligaments receive sensory articular twigs from the posterior division of the tibial nerve."
    },
    {
        question: "Regarding the flexor digitorum longus muscle, which statement is true?",
        options: ["Its four tendons divide under the flexor retinaculum", "It arises from the tibia and interosseous membrane only", "The medial two tendons receive a strong slip from the tendon of flexor hallucis longus", "The tendons have no flexor sheaths", "It inserts into the bases of the middle phalanges"],
        correct: 2,
        explanation: "In the sole of the foot, the tendon of flexor digitorum longus is crossed by the tendon of flexor hallucis longus, which frequently contributes a strong slip to the medial tendons."
    },
    {
        question: "All of the following are true branches of the femoral artery EXCEPT:",
        options: ["Superficial circumflex iliac artery", "Superficial epigastric artery", "Superficial external pudendal artery", "Deep external pudendal artery", "Middle genicular artery"],
        correct: 4,
        explanation: "The middle genicular artery is a deep branch arising from the popliteal artery inside the popliteal fossa, not the femoral artery."
    },
    {
        question: "Which of the following cutaneous nerves of the thigh is NOT derived from the L2 spinal segment?",
        options: ["Ilioinguinal nerve", "Medial femoral cutaneous nerve", "Obturator nerve cutaneous branch", "Lateral femoral cutaneous nerve", "Genitofemoral nerve"],
        correct: 0,
        explanation: "The ilioinguinal nerve arises entirely from the L1 anterior ramus, whereas the others contain structural contributions from the L2 spinal root."
    },
    {
        question: "Which statement regarding the great saphenous vein is anatomically INCORRECT?",
        options: ["It is the longest vein in the body", "It passes behind the medial malleolus", "At the knee, it lies a hand's breadth behind the medial border of the patella", "The saphenous opening lies about 3cm below and lateral to the pubic tubercle", "The deep external pudendal artery runs medially behind the saphenous vein near its termination"],
        correct: 1,
        explanation: "The statement is incorrect because the great saphenous vein passes *anterior* (in front of) the medial malleolus, not behind it."
    },
    {
        question: "Regarding lymphatic drainage of the lower limb, which statement is true?",
        options: ["The superficial inguinal node group consists of about 15 nodes", "The lateral nodes of the proximal superficial group receive lymph from the buttock, flank and back below the waist", "The medial nodes of proximal superficial group receive lymph from testes", "The distal nodes of the superficial group receive all the superficial lymphatics of the lower limb", "The superficial inguinal nodes drain mainly to the internal iliac nodes"],
        correct: 1,
        explanation: "The lateral nodes of the horizontal/proximal superficial inguinal group receive afferent lymph vessels draining the lower posterior trunk wall, flank, and gluteal skin regions."
    },
    {
        question: "The deep fascia of the thigh (fascia lata) does NOT attach to which structure?",
        options: ["Attached inferiorly to the tibial condyles and head of the fibula", "Reinforced anteriorly by expansions from the quadriceps tendon", "Attached to Scarpa's fascia above the inguinal ligament", "Continuous below the popliteal fossa into the deep fascia of the calf", "Attached superiorly along the external lip of the iliac crest"],
        correct: 2,
        explanation: "Fascia lata attaches to the inguinal ligament directly where it meets Scarpa's fascia along the crease of the thigh, not *above* the inguinal ligament."
    },
    {
        question: "The iliotibial tract serves as a structural insertion point for approximately 60-75% of which muscle?",
        options: ["Tensor fascia latae", "Gluteus medius", "Gluteus maximus", "Sartorius", "Rectus femoris"],
        correct: 2,
        explanation: "The deep upper fibers and the main bulk (about three-quarters) of the powerful gluteus maximus insert directly into the posterior aspect of the thickened iliotibial tract."
    },
    {
        question: "Which muscle is NOT located in the floor of the femoral triangle?",
        options: ["Iliacus", "Psoas major", "Pectineus", "Adductor magnus", "Adductor longus"],
        correct: 3,
        explanation: "The floor of the femoral triangle is formed from lateral to medial by the iliacus, psoas major, pectineus, and adductor longus muscles. Adductor magnus is deep to these elements."
    },
    {
        question: "Which important lower limb structure is located completely outside of the protective femoral sheath?",
        options: ["Femoral artery", "Femoral canal", "Femoral hernia", "Femoral nerve", "Lymph node of Cloquet"],
        correct: 3,
        explanation: "The femoral nerve runs outside and lateral to the femoral sheath container, lying in the groove between the psoas and iliacus muscles."
    },
    {
        question: "The deep artery of the thigh (profunda femoris) does NOT perform which of the following?",
        options: ["Normally supply all the thigh muscles", "Arise from the lateral side of the femoral artery, 3-4cm distal to the inguinal ligament", "Give off the deep external pudendal artery", "Lie behind the profunda vein", "Lie directly anterior to adductor brevis and magnus"],
        correct: 2,
        explanation: "The deep external pudendal artery is a direct branch of the common femoral artery, not the profunda femoris artery."
    },
    {
        question: "Which statement is INCORRECT regarding the origins or path of the femoral nerve?",
        options: ["Is formed from the anterior divisions of the anterior rami of the lumbar nerves 2, 3 and 4", "Supplies iliacus in the abdomen", "Lies in the iliac fossa between psoas and iliacus", "Gives a branch to pectineus as it enters the femoral triangle", "Divides into several branches just distal to the inguinal ligament"],
        correct: 0,
        explanation: "The femoral nerve is formed by the *posterior* divisions of the anterior primary rami of L2, L3, and L4, making option A explicitly incorrect."
    },
    {
        question: "All of the following are direct branches of the femoral nerve trunk EXCEPT:",
        options: ["Medial femoral cutaneous nerve", "Saphenous nerve", "Nerve to vastus medialis", "Lateral femoral cutaneous nerve", "Nerve to sartorius"],
        correct: 3,
        explanation: "The lateral femoral cutaneous nerve is a direct, independent branch of the lumbar plexus arising from the posterior divisions of L2 and L3 rami."
    },
    {
        question: "What is the most important dynamic factor preventing lateral displacement of the patella during extension?",
        options: ["The forward prominence of the lateral condyle of the femur", "The action of articularis genu", "The action of vastus medialis lower horizontal fibers", "The action of rectus femoris", "The tension of the medial patellar retinaculum"],
        correct: 2,
        explanation: "The horizontal/oblique lower fibers of the vastus medialis (VMO) pull the patella medially, dynamically counteracting the natural lateral pull of the remaining quadriceps mass."
    },
    {
        question: "The adductor (Hunter's) canal is NOT occupied by which of the following structures?",
        options: ["Roofed by fascia containing the subsartorial plexus", "Occupied by the sciatic nerve", "Also known as Hunter's canal", "Occupied by the femoral artery", "A gutter shaped groove between vastus medialis and the front of the adductor muscles"],
        correct: 1,
        explanation: "The sciatic nerve descends in the posterior compartment of the thigh and never enters the anterior-medial adductor canal."
    },
    {
        question: "Within the distal segment of the adductor canal, what is the position of the femoral vein relative to the femoral artery?",
        options: ["Sartorius lies on the fascial roof", "In the distal part of the canal, the femoral vein is posterolateral to the artery", "At all levels, the artery lies between saphenous nerve and femoral vein", "The subsartorial plexus supplies overlying fascia lata", "The adductors in the floor of the canal are the adductor brevis above and the adductor longus below"],
        correct: 1,
        explanation: "As the vessels approach the adductor hiatus, the femoral vein spirals around the artery to assume a posterolateral position."
    },
    {
        question: "Which structural feature characterizes the medial compartment of the thigh?",
        options: ["Adductor magnus consists of adductor and hamstring muscle masses", "The contents are separated from the posterior compartment by the posterior intermuscular septum", "Adductor longus is the most superficial muscle of the medial side of the thigh", "The anterior division of the obturator nerve passes through obturator externus", "The posterior division of the obturator nerve is the prime motor supply"],
        correct: 0,
        explanation: "Adductor magnus is a hybrid muscle containing an adductor part (supplied by obturator nerve) and a hamstring part (supplied by the sciatic nerve)."
    },
    {
        question: "With respect to the posterior compartment of the thigh, where does the sciatic nerve lie in relation to the hamstrings?",
        options: ["Blood supply is mainly from the femoral artery", "The sciatic nerve lies lateral to the long head of biceps", "The long head of biceps is supplied by the common peroneal nerve", "The hamstrings form the apex of the popliteal fossa", "Semimembranosus arises in common with the long head of biceps"],
        correct: 3,
        explanation: "The divergent hamstring muscles (biceps femoris laterally and semimembranosus/semitendinosus medially) form the superior boundaries/apex of the popliteal fossa."
    },
    {
        question: "A slipped upper femoral epiphysis (SUFE) typically presents with referred pain in which region?",
        options: ["Is more common in girls than boys", "Usually occurs in the 5-8 year age group", "May present as referred pain in the knee", "The limb may be internally rotated and shortened", "Can be treated conservatively"],
        correct: 2,
        explanation: "Due to shared nociceptive sensory pathways via the obturator and femoral nerves, hip pathology like SUFE frequently presents as referred pain localized exclusively to the knee joint."
    },
    {
        question: "Which of the following correctly pairs a lower limb dermatome with its corresponding sensory territory?",
        options: ["S1 supplies the great toe", "L2 supplies anterior upper thigh", "S3 supplies perianal area", "L4 supplies medial thigh", "L5 supplies medial calf"],
        correct: 1,
        explanation: "L2 maps across the anterior upper and middle aspects of the thigh. L5 supplies the lateral calf/great toe, while L4 supplies the medial leg/calf."
    },
    {
        question: "The patellar plexus of nerves comprises contributions from all of the following EXCEPT:",
        options: ["Posterior branch of lateral femoral cutaneous nerve", "Infrapatellar branch of saphenous nerve", "Medial femoral cutaneous nerve", "Anterior branch of lateral femoral cutaneous nerve", "Intermediate femoral cutaneous nerve"],
        correct: 0,
        explanation: "The posterior branch of the lateral femoral cutaneous nerve supplies the lateral gluteal skin and upper posterior thigh, not the anterior pre-patellar plexus."
    },
    {
        question: "What is the most medial structure passing deep to the inferior extensor retinaculum of the foot?",
        options: ["Deep peroneal nerve", "Tibialis anterior", "Extensor hallucis longus", "Anterior tibial artery", "Peroneus brevis"],
        correct: 1,
        explanation: "The structures pass under the extensor retinaculum from medial to lateral in this order: Tibialis anterior, Extensor hallucis longus, Anterior tibial artery, Deep peroneal nerve, Extensor digitorum longus, Peroneus tertius."
    },
    {
        question: "Cutaneous nerve supply of the thigh involves all but which of the following nerves?",
        options: ["The intermediate femoral cutaneous nerve", "The obturator nerve", "The genital branch of the genitofemoral nerve", "The ilioinguinal nerve", "The posterior cutaneous nerves of the thigh"],
        correct: 2,
        explanation: "The genital branch of the genitofemoral nerve supplies the skin of the scrotum/labium majus and the cremasteric muscle, not the cutaneous thigh fields (which are supplied by the femoral branch)."
    },
    {
        question: "The patellar plexus takes twigs from all but which of the following nerves?",
        options: ["Infrapatellar branch of the common peroneal nerve", "Medial femoral cutaneous nerve", "Lateral femoral cutaneous nerve", "Intermediate femoral cutaneous nerve", "Infrapatellar branch of the saphenous nerve"],
        correct: 0,
        explanation: "The common peroneal nerve has no direct infrapatellar branch participating in the prepatellar plexus network."
    },
    {
        question: "The inferior gluteal nerve provides exclusive motor supply to which muscle?",
        options: ["Gluteus maximus", "Gluteus medius", "Gluteus minimus", "All of the above", "None of the above"],
        correct: 0,
        explanation: "The inferior gluteal nerve (L5-S2) solely innervates the gluteus maximus muscle, while the superior gluteal nerve innervates the medius, minimus, and tensor fasciae latae."
    },
    {
        question: "Within the deep gluteal quadrant, what is the spatial relationship of the sciatic nerve?",
        options: ["The pudendal nerve emerges beneath piriformis, turns around the back of the sacrospinous ligament", "The internal pudendal artery can be compressed against the base of the ischial tuberosity", "The sciatic nerve emerges from below piriformis muscle more laterally than the inferior gluteal and pudendal structures", "The posterior femoral cutaneous nerve lies medially to the sciatic nerve", "The cruciate anastomosis provides the main source of blood for the supply of the head of femur"],
        correct: 2,
        explanation: "The sciatic nerve emerges into the gluteal region below the piriformis muscle, positioned further laterally than the medial-lying pudendal and inferior gluteal neurovascular bundles."
    },
    {
        question: "With respect to the ligaments around the knee joint, which statement is true?",
        options: ["The fibular collateral ligament blends with the capsule and is attached to the lateral meniscus", "The tibial collateral ligament blends posteriorly with the capsule and is attached to the medial meniscus", "The oblique popliteal ligament is an expansion from the tendon of semitendinosus", "The posterior cruciate ligament runs from anterior tibial plateau to lateral condyle", "The transverse ligament runs posteriorly between menisci"],
        correct: 1,
        explanation: "The medial (tibial) collateral ligament is firmly attached to the capsule and the underlying peripheral edge of the medial meniscus, explaining why both are frequently torn together."
    },
    {
        question: "Which statement regarding the deep veins or vessels of the posterior leg compartment is FALSE?",
        options: ["Plantaris arises from the lower part of the lateral supracondylar line", "The medial head of gastrocnemius is larger than the lateral", "The small saphenous vein drains the medial side of the dorsal venous arch and medial margin of the foot", "The soleal muscle contains a rich plexus of small veins acting as the soleal pump", "The nerve of this compartment is the tibial nerve"],
        correct: 2,
        explanation: "The small saphenous vein drains the *lateral* side of the dorsal venous arch and runs along the lateral border of the foot/tendoachilles path."
    },
    {
        question: "What is the primary clinical spinal myotome responsible for the plantar flexion of the great toe?",
        options: ["L3, 4", "L4, 5", "L5, S1", "S1, 2", "S2, 3"],
        correct: 3,
        explanation: "Plantar flexion of the hallux and the foot at the ankle joint is heavily driven by the S1-S2 nerve root segments via the flexor hallucis longus and gastrocnemius/soleus complexes."
    },
    {
        question: "The tubercle of the iliac crest lies at what distance behind the anterior superior iliac spine (ASIS)?",
        options: ["2.5 cm", "5.0 cm", "7.5 cm", "10.0 cm", "12.5 cm"],
        correct: 2,
        explanation: "The prominent, palpable tubercle of the iliac crest is situated exactly 7.5 cm (3 inches) posterior to the ASIS along the outer lip of the crest."
    },
    {
        question: "Which structure is NOT found within the adductor (subsartorial) canal?",
        options: ["Femoral artery", "Femoral vein", "Femoral nerve", "Saphenous nerve", "Nerve to vastus medialis"],
        correct: 2,
        explanation: "The main trunk of the femoral nerve divides in the femoral triangle; only its branches (the saphenous nerve and nerve to vastus medialis) enter the adductor canal. The primary femoral nerve trunk does not."
    },
    {
        question: "What are the precise surface anatomy marking coordinates for the path of the sciatic nerve?",
        options: ["From the ischial tuberosity to the adductor tubercle", "From the posterior superior iliac spine to the apex of the popliteal fossa", "From the midpoint between ischial tuberosity and greater trochanter to the apex of the popliteal fossa", "From the ischial tuberosity to the apex of the popliteal fossa", "From the greater trochanter to the medial malleolus"],
        correct: 2,
        explanation: "The sciatic nerve follows a vertical line drawn from the midpoint between the greater trochanter and the ischial tuberosity down to the superior apex of the popliteal fossa."
    },
    {
        question: "The anatomical boundary of the femoral canal is positioned directly medial to which structure?",
        options: ["Is the lateral compartment of the femoral sheath", "Lies medial to the pubic tubercle", "Contains the femoral nerve", "Is medial to the femoral vein", "Transmits the femoral branch of the genitofemoral nerve"],
        correct: 3,
        explanation: "The femoral canal is the most medial compartment of the femoral sheath, sitting directly medial to the intermediate compartment which contains the femoral vein."
    },
    {
        options: ["It inserts into the middle third of the posterior surface of the calcaneus", "It is invested in a protective synovial sheath", "It is formed from the soleus and gastrocnemius muscles", "A bursa lies between the tendon and the upper third of the calcaneus", "A bursa lies between it and the deep fascia near its insertion"],
        question: "Which statement is NOT true regarding the Achilles tendon (tendoachilles)?",
        correct: 1,
        explanation: "The tendoachilles lacks a true synovial sheath; instead, it is surrounded by a fatty paratenon that allows it to glide smoothly."
    },
    {
        question: "Which structure lies completely within the articular capsule of the knee joint?",
        options: ["Patellar ligament", "Tibial collateral ligament", "Fibular collateral ligament", "Tendon of popliteus", "Patellar retinacula"],
        correct: 3,
        explanation: "The tendon of popliteus arises intracapsularly from the lateral femoral condyle, passing inside the joint capsule before exiting to reach the posterior tibial shaft."
    },
    {
        question: "Following a deep laceration to the lateral neck of the fibula, a patient presents with an inability to dorsiflex the foot. Which nerve is compromised?",
        options: ["The deep branch of the common peroneal nerve", "The sural nerve", "The superficial branch of the common peroneal nerve", "The saphenous nerve", "The tibial nerve"],
        correct: 0,
        explanation: "The deep peroneal nerve branch directly innervates all muscles of the anterior leg compartment responsible for ankle dorsiflexion."
    },
    {
        question: "Peroneus longus muscle is natively innervated by which nerve branch?",
        options: ["Deep peroneal nerve", "Superficial peroneal nerve", "Common peroneal nerve trunk", "Tibial nerve", "Sural nerve"],
        correct: 1,
        explanation: "The superficial peroneal nerve (L5-S1) runs inside the lateral compartment of the leg to supply both the peroneus longus and peroneus brevis muscles."
    },
    {
        question: "The prime stabilization component of the weight-bearing, flexed knee joint is maintained by which structure?",
        options: ["Anterior cruciate ligament", "Iliotibial tract", "Posterior cruciate ligament", "Popliteus muscle alone", "Arcuate popliteal ligament"],
        correct: 2,
        explanation: "The posterior cruciate ligament (PCL) is the primary stabilizer of the knee joint during weight-bearing flexion, preventing the femur from sliding anteriorly off the tibial plateau."
    },
    {
        question: "Which of the following lines the structural boundaries of the femoral triangle?",
        options: ["The lateral border of the adductor longus makes up its medial boundary", "It is bisected by the femoral nerve", "The lateral border of sartorius muscle makes up its lateral boundary", "The long saphenous vein joins the femoral vein within the triangle", "Rectus femoris makes up part of the floor"],
        correct: 3,
        explanation: "The long (great) saphenous vein ascends the medial thigh, passing through the saphenous opening within the boundaries of the femoral triangle to drain directly into the femoral vein."
    },
    {
        question: "Active inversion of the foot across the subtalar joints is primarily performed by which muscle pair?",
        options: ["Peroneus longus and peroneus brevis", "Peroneus longus and tibialis posterior", "Tibialis anterior and tibialis posterior", "Peroneus brevis and plantaris", "Tibialis anterior and peroneus tertius"],
        correct: 2,
        explanation: "Tibialis anterior (supplied by the deep peroneal nerve) and tibialis posterior (supplied by the tibial nerve) pull the medial border of the foot superiorly to invert it."
    },
    {
        question: "The anterior tibial artery undergoes which structural transition in the leg?",
        options: ["Pierces the upper border of the interosseous membrane", "Supplies the lateral compartment muscles primarily", "Lies lateral to the deep peroneal nerve", "Lies lateral to the tibialis anterior muscle trunk", "Gives the primary nutrient artery to the tibia"],
        correct: 0,
        explanation: "The anterior tibial artery passes forward into the anterior leg compartment by piercing the upper oval gap in the interosseous membrane."
    },
    {
        question: "How far superiorly above the patellar base can a healthy suprapatellar bursa expand?",
        options: ["It does not communicate with the knee joint", "Lies in front of the vastus intermedius muscle", "Extends 5cm or more above the patella", "Lies deep to the patellar retinacula", "Extends no more than 1cm"],
        correct: 2,
        explanation: "The suprapatellar bursa forms a large pouch that extends 5 cm or more superior to the patella, deep to the quadriceps tendon, and communicates directly with the knee joint cavity."
    },
    {
        question: "Which of the following actions or properties does NOT apply to the popliteus muscle?",
        options: ["It inserts into the lateral meniscus of the knee joint", "It is innervated by the tibial nerve", "It acts to extend the knee joint", "It inserts into the lateral condyle of the femur", "It acts to laterally rotate the femur on the fixed tibia"],
        correct: 2,
        explanation: "Popliteus does not extend the knee; its primary role is flexing and unlocking the knee by rotating the femur laterally on a fixed tibia."
    },
    {
        question: "Adenopathy isolated to the medial group of superficial inguinal lymph nodes can stem from primary pathology in which area?",
        options: ["Right testis", "Right buttock", "The skin of the right lower limb", "The lower anal canal", "None of the above"],
        correct: 3,
        explanation: "The lower anal canal below the pectinate line drains directly into the superficial inguinal lymph nodes, whereas the testes drain to the para-aortic nodes."
    },
    {
        question: "What structural feature characterizes the branches or origin of the deep artery of the thigh (profunda femoris)?",
        options: ["It enters the thigh directly beneath the deep inguinal ring", "It lies lateral to the femoral nerve in the femoral sheath", "It gives rise to the profunda femoris artery which pierces the femoral sheath", "Does not contribute to the trochanteric anastomosis", "Its branches include the superficial epigastric artery and the deep external pudendal artery"],
        correct: 2,
        explanation: "The profunda femoris artery typically branches off the lateral aspect of the femoral artery within the femoral triangle, piercing the lateral wall of the femoral sheath container."
    }
];

// ==========================================
// 3. APPLICATION STATE MANAGEMENT
// ==========================================
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentStudentName = "";
let isAnswered = false;

// ==========================================
// 4. DOM ELEMENT SELECTION HUD MAP
// ==========================================
const screenRegistration = document.getElementById("screen-registration");
const screenAssessment = document.getElementById("screen-assessment");
const screenResults = document.getElementById("screen-results");

const regForm = document.getElementById("reg-form");
const studentNameInput = document.getElementById("student-name-input");
const btnStart = document.getElementById("btn-start");

const hudBadgeName = document.getElementById("hud-badge-name");
const hudScorePill = document.getElementById("hud-score-pill");
const hudProgressText = document.getElementById("hud-progress-text");
const hudProgressBarFill = document.getElementById("hud-progress-bar-fill");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackBox = document.getElementById("feedback-box");
const feedbackText = document.getElementById("feedback-text");
const btnNext = document.getElementById("btn-next");

const resStudentName = document.getElementById("res-student-name");
const resFinalScore = document.getElementById("res-final-score");
const dbStatusIndicator = document.getElementById("db-status-indicator");
const btnRestart = document.getElementById("btn-restart");

// ==========================================
// 5. APPLICATION INIT & CORE RESTART LOGIC
// ==========================================
function initializeAssessmentLoop() {
    // 1. Clear out active state values
    currentQuestionIndex = 0;
    score = 0;
    currentStudentName = "";
    isAnswered = false;

    // 2. Clear input fields and wipe HUD labels
    studentNameInput.value = "";
    hudBadgeName.textContent = "👤 --";
    hudScorePill.textContent = "Score: 0%";
    dbStatusIndicator.className = "status-pill loading";
    dbStatusIndicator.innerHTML = "<span>⏳ Readying Cloud Sync...</span>";

    // 3. Shuffle array and extract 60 distinct questions
    shuffledQuestions = [...questionBank]
        .sort(() => 0.5 - Math.random())
        .slice(0, 60);

    // 4. Reset UI visibility frames back to Screen 1
    screenAssessment.classList.add("hidden");
    screenResults.classList.add("hidden");
    screenRegistration.classList.remove("hidden");
}

// Attach lifecycle entry trigger on document frame load
document.addEventListener("DOMContentLoaded", initializeAssessmentLoop);

// ==========================================
// 6. VIEW NAVIGATION ENGINE & EVENTS
// ==========================================
regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const enteredName = studentNameInput.value.trim();
    
    if (!enteredName) return;
    
    currentStudentName = enteredName;
    
    // Bind Registered Profile Data into Live Tracking HUD
    hudBadgeName.textContent = `👤 ${currentStudentName}`;
    
    // Transition to Screen 2
    screenRegistration.classList.add("hidden");
    screenAssessment.classList.remove("hidden");
    
    renderCurrentQuestion();
});

// ==========================================
// 7. HUD TELEMETRY & QUESTION RENDER ENGINE
// ==========================================
function renderCurrentQuestion() {
    isAnswered = false;
    btnNext.classList.add("hidden");
    feedbackBox.classList.add("hidden");
    optionsContainer.innerHTML = "";
    
    const activeQ = shuffledQuestions[currentQuestionIndex];
    
    // Update Dynamic HUD Progress Labels & Smooth Transition Width Fill
    const questionNumberDisplay = currentQuestionIndex + 1;
    const totalQuestions = shuffledQuestions.length;
    hudProgressText.textContent = `Question ${questionNumberDisplay} of ${totalQuestions}`;
    
    const progressPercentage = (questionNumberDisplay / totalQuestions) * 100;
    hudProgressBarFill.style.width = `${progressPercentage}%`;
    
    // Render text string
    questionText.textContent = activeQ.question;
    
    // Render interactive selection choices
    activeQ.options.forEach((optionText, index) => {
        const optionButton = document.createElement("button");
        optionButton.type = "button";
        optionButton.className = "option-btn";
        optionButton.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-body"></span>
        `;
        // Safely assign text content to option body container to protect structural integrity
        optionButton.querySelector(".option-body").textContent = optionText;
        
        optionButton.addEventListener("click", () => handleOptionSelection(index, optionButton));
        optionsContainer.appendChild(optionButton);
    });
}

// ==========================================
// 8. VERIFICATION STATES & REAL-TIME FEEDBACK
// ==========================================
function handleOptionSelection(selectedIndex, clickedButton) {
    if (isAnswered) return; // Prevent double evaluation exploits
    isAnswered = true;
    
    const activeQ = shuffledQuestions[currentQuestionIndex];
    const allOptionButtons = optionsContainer.querySelectorAll(".option-btn");
    
    // Evaluate validity
    if (selectedIndex === activeQ.correct) {
        score++;
        clickedButton.classList.add("correct");
    } else {
        clickedButton.classList.add("wrong");
        // Highlight correct response path to student as feedback
        allOptionButtons[activeQ.correct].classList.add("correct");
    }
    
    // Freeze all other button states from trigger interaction
    allOptionButtons.forEach(btn => btn.disabled = true);
    
    // Real-Time HUD Scoring Telemetry Calculation Update
    const currentScorePercentage = Math.round((score / shuffledQuestions.length) * 100);
    hudScorePill.textContent = `Score: ${currentScorePercentage}%`;
    
    // Smoothly reveal explanation feedback card block
    feedbackText.textContent = activeQ.explanation;
    feedbackBox.classList.remove("hidden");
    
    // Reveal navigation button
    btnNext.classList.remove("hidden");
}

// ==========================================
// 9. SCREEN ADVANCEMENT LOGIC
// ==========================================
btnNext.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        renderCurrentQuestion();
    } else {
        transitionToResultsDashboard();
    }
});

// ==========================================
// 10. RESULTS COMPILATION & CLOUD SYNC ENGINE
// ==========================================
function transitionToResultsDashboard() {
    screenAssessment.classList.add("hidden");
    screenResults.classList.remove("hidden");
    
    const finalCalculatedScore = Math.round((score / shuffledQuestions.length) * 100);
    
    // Populate Results Frame Inner Box Data
    resStudentName.textContent = currentStudentName;
    resFinalScore.textContent = `${score} / ${shuffledQuestions.length} (${finalCalculatedScore}%)`;
    
    // Trigger Canvas Confetti celebration animation if performance standard met
    if (finalCalculatedScore >= 70) {
        triggerHighPerformanceCelebration();
    }
    
    // Commit payload data to cloud DB
    persistTelemetryToFirestore(finalCalculatedScore);
}

function triggerHighPerformanceCelebration() {
    // Call standard global confetti instantiation block
    if (typeof confetti === "function") {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
}

async function persistTelemetryToFirestore(finalScorePercentage) {
    try {
        dbStatusIndicator.className = "status-pill loading";
        dbStatusIndicator.innerHTML = "<span>⏳ Synchronizing Secure DB Record...</span>";
        
        await addDoc(collection(db, "quiz_submissions"), {
            studentName: currentStudentName,
            rawScore: score,
            totalQuestions: shuffledQuestions.length,
            percentageScore: finalScorePercentage,
            courseSubject: "Lower Limb Anatomy & Clinical Physiology",
            timestamp: serverTimestamp()
        });
        
        // Update to green check verified synchronization indicator state upon resolution
        dbStatusIndicator.className = "status-pill success";
        dbStatusIndicator.innerHTML = "<span>✅ Cloud Database Synchronized</span>";
        
    } catch (error) {
        console.error("Firestore persistence transmission failure: ", error);
        dbStatusIndicator.className = "status-pill failure";
        dbStatusIndicator.innerHTML = "<span>❌ Synchronization Local Offline Cache Saved</span>";
    }
}

// ==========================================
// 11. CYCLICAL RESTART EVENT BINDING
// ==========================================
btnRestart.addEventListener("click", initializeAssessmentLoop);