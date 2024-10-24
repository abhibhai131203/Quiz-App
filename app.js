let box = document.querySelector(".box");
let start = document.querySelector("#start");
let ques = document.querySelector(".ques");
let o1 = document.querySelector("#o1");
let o2 = document.querySelector("#o2");
let o3 = document.querySelector("#o3");
let o4 = document.querySelector("#o4");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let a = document.querySelector("#a");
let d = document.querySelector("#d");
let next = document.querySelector("#next");
let listo1 = o1.classList;
let listo2 = o2.classList;
let listo3 = o3.classList;
let listo4 = o4.classList;
let lista = a.classList;
let listb = b.classList;
let listc = c.classList;
let listd = d.classList;
let submit = document.querySelector("#sub");
let score = 0;
let correctaudio = new Audio("correct.mp3");
let wrongaudio = new Audio("wrong.mp3");
let input = document.querySelectorAll("input");
let num = document.querySelector(".num");
let sc = document.querySelector(".score");
let reset = document.querySelector(".reset");
let timer;
let seconds = 0;
let isRunning = false;





//database here ::::::::::::::::::::::::::::::::::::::::::

  let q1 = [
    {
      ques: "According to de Broglie’s hypothesis, all matter exhibits wave-like behaviour. Among the following particles, which one will have the smallest wavelength associated with it for the same velocity?",
      o1: "Proton",
      o2: "Electron",
      o3: " Alpha particle",
      o4: " Cricket ball",
      ans: "d",
    },
    {
      ques: "Consider an electron moving in a circular orbit around a nucleus. If the radius of the orbit is halved, how does the de Broglie wavelength of the electron change?",
      o1: " remains the same",
      o2: "four times smaller",
      o3: "doubles",
      o4: "halves",
      ans: "d",
    },
    {
      ques: "The wave function of a particle moving in free space is given by, ψ=(eikx+4e^−ikx). The energy of the particle is",
      o1: "5h^2k^2/2m",
      o2: "3h^2k^2/2m",
      o3: "h^2k^2/2m",
      o4: "h^2k^2/m",
      ans: "c",
    },
    {
      ques: "Silicon has a diamond-cubic lattice structure with a lattice constant a = 5.43 ˚A as shown in the figure below. The silicon crystal is formed by periodic repetition of the unit cells in the x, y and z directions. In each unit cell, 8 atoms at the corners are shared with 8 adjacent cells. Hence, the corner atoms are considered to contribute one-eighth of the unit cell. The 6 atoms in center of each face are shared by two adjacent unit cells. Hence, they contribute one-half to the unit cell. Lastly, the 4 atoms within the body of the unit cell contribute fully. Hence the effective number of atoms per unit cell is 18×8+12×6+4×1=8 atoms. Determine the density of atoms is #atoms/cm^3",
      o1: " 1 × 10^22",
      o2: "5 × 10^22",
      o3: "2.5 × 10^22",
      o4: "1.6 × 10^22",
      ans: "b",
    },
    {
      ques: "Consider an electron confined in an infinite square well of width 1 nm. If an electron undergoes a transition from the first excited state (n=2)to the ground state (n=1), it emits a photon. Calculate the wavelength of the photon emitted during the same transition",
      o1: "1.1 pm",
      o2: "1.1 µm",
      o3: "1.1 mm",
      o4: "1.1 nm",
      ans: "b",
    },
    {
      ques: "There are two semiconducting materials with the energy band gaps Eg,A=0.7 eV and Eg,B=1.4 eV. Which of the following is true regarding the probability P(i) of ehp generation at the same T?",
      o1: "P(B)=P(A)≠1",
      o2: "P(B)<<P(A)",
      o3: "P(B)>>P(A)",
      o4: "P(B)=P(A)=1",
      ans: "b",
    },
    {
      ques: "Consider two semiconductor materials: Germanium with an energy band gap of 0.7 eV and Sapphire with an energy band gap of 9.9 eV. Which material will be transparent for visible light of wavelength λ=400 nm?",
      o1: "Sapphire",
      o2: "Germanium",
      o3: " Both Germanium and Sapphire",
      o4: " Neither Germanium nor Sapphire",
      ans: "a",
    },
    {
      ques: "(i) Si is an indirect band gap material, and GaAs is a direct band gap material.      (ii) Momentum is conserved in an indirect band gap material.    (iii) Si is a direct band gap material, and GaAs is an indirect band gap material.   (iv) Momentum is conserved in a direct band gap material.",
      o1 : " (i) is incorrect and (ii) is correct",
      o2: "(i) is incorrect and (ii) is correct",
      o3: " (ii) and (iv) are correct",
      o4: "(i) and (iv) are correct",
      ans: "d",
    },
    {
      ques: "Cut off wavelength (in µm) of light that can be used for intrinsic excitation of semiconductor material of band gap 1.1 eV",
      o1: "1.45",
      o2: "0.85",
      o3: " 2.25",
      o4: "1.125",
      ans: "d",
    },
    {
      ques: "The recoil momentum of an atom is pA when it emits an infrared photon of wavelength 1500 nm, and it is pB when it emits a photon of visible wavelength 500 nm. The ratio of pA/pB is given by .",
      o1: "1/sqrt(3)",
      o2: "1/3",
      o3: "1",
      o4: "sqrt(3)",
      ans: "b",
  }
  ];
  let q2 = [
    {
      ques: "Choose the correct statement. (i) In a doped semiconductor, the ionized dopants (donor/acceptors) can freely move in the lattice. (ii) In a doped semiconductor, the ionized dopants (donor/acceptors) do not directly contribute to the current flow.",
      o1: "Both (i) and (ii)",
      o2: "(i)",
      o3: "Neither (i) nor (ii)",
      o4: "(ii)",
      ans: "d",
    },
    {
      ques: "The electron concentration in a piece of Si maintained at 300 K under equilibrium condition is 10^5cm−3. The hole concentration is ______ cm −3 (take n_i= 10^10 cm^−3).",
      o1: "insufficient information",
      o2: "10^5",
      o3: "10^10",
      o4: "10^15",
      ans: "d",
    },
    {
      ques: "A particular intrinsic semiconductor has a resistivity of 100Ω cm at T = 300 K and 10Ω cm at T = 330 K. If the mobility of the carriers and energy band gap remains unchanged with temperature, the band gap of the semiconductor is _____.",
      o1: "1.43 eV",
      o2: "1.13 eV",
      o3: "1.23 eV",
      o4: "1.33 eV",
      ans: "c",
    },
    {
      ques: "Consider silicon doped with Boron to a concentration 4×10^15 atoms / cm 3 . If ni = 1.5×10^10 cm −3 and VT = 26 meV at T = 300 K. Compared to undoped silicon, the Fermi level of doped silicon",
      o1: "shifts by 0.15 eV towards EV",
      o2: "shifts by 0.325 eV towards EV",
      o3: "shifts by 0.25 eV towards EC",
      o4: "shifts by 0.325 eV towards EC",
      ans: "b",
    },
    {
      ques: "Choose the incorrect statement regarding the mobility of carriers in a semiconductor material.",
      o1: "For a semiconductor material, surface mobility is smaller than the bulk.",
      o2: "Due to higher lattice force experienced by holes, µp>µn.",
      o3: "Mobility depends on temperature",
      o4: "The unit of mobility is cm^2/(Vsec).",
      ans: "b",
    },
    {
      ques: "(GATE-PH2011) For an intrinsic semiconductor, m∗_e and m∗_h are effective masses of electrons and holes near the corresponding band edges respectively. At finite temperature, the position of the Fermi level depends on .",
      o1: "m∗e not on m∗h",
      o2: "both m∗e and m∗h",
      o3: "neither m∗e nor m∗h",
      o4: "m∗h not on m∗e",
      ans: "b",
    },
    {
      ques: "Consider two semiconductor materials: Germanium with an energy band gap of 0.7 eV and Sapphire with an energy band gap of 9.9 eV. Which material will be transparent for visible light of wavelength λ=400 nm?",
      o1: "Sapphire",
      o2: "Germanium",
      o3: " Both Germanium and Sapphire",
      o4: " Neither Germanium nor Sapphire",
      ans: "a",
    },
    {
      ques: "(GATE-PH2021) The donor concentration in a sample of n-type silicon is increased by a factor of 100. Assuming the sample to be non-degenerate, the shift in the Fermi level (in meV) at 300 K (rounded off to nearest integer) is . (Given: kT=25 meV at 300 K)",
      o1 : "165.5",
      o2: "218.2",
      o3: "82.75",
      o4: "115.5",
      ans: "d",
    }
  ];  
  let q3 = [
    {
      ques: "According to the Einstein relation, for any semiconductor the ratio of diffusion constant to mobility of carriers.",
      o1 : " Varies with the lifetime of the semiconductor.",
      o2: "Is a universal constant",
      o3: "Depends upon the type of the semiconductor.",
      o4: "Depends upon the temperature of the semiconductor",
      ans: "d",
    },
    {
      ques: "If the mobility of minority carriers in an N-type semiconductor is 480cm^2/V − sec then what is the diffusion length of these minority carriers within the semiconductor (assuming minority carrier lifetime is 10μs)?",
      o1: "181.48 μm",
      o2: "353 μm",
      o3: "3524 μm",
      o4: "111.5 μm",
      ans: "d",
    },
    {
      ques: "Assume the donor concentration in an n-type semiconductor at T=300K is given by Nd(x)=1016e^−x/L where L=2×10^−2 cm. Determine the induced electric field (V/cm) at x=1×10^−4 cm",
      o1: "2.45",
      o2: "4.13",
      o3: "1.29",
      o4: "3",
      ans: "c",
    },
    {
      ques: "In an n-type semiconductor bar, there is an increase in electron concentration from left to right and an electric field exists pointing to the left. If we double the electron concentration everywhere, what will happen to the diffusion current and drift current?",
      o1: "Drift current doubles and diffusion no changes",
      o2: "Both doubles",
      o3: "No change in both currents",
      o4: " Diffusion current doubles and drift no changes",
      ans: "b",
    },
    {
      ques: "Consider a semiconductor with q=1.6×10^−19C,µn=1200cm2/V-s, kT/q=26mV,n=2×10^15cm−3,E=400V/cm and ∂n∂x=2×10^20cm−3\nCalculate the drift current density",
      o1 : "120.5 A/cm^2",
      o2: "153.6 A/cm^2",
      o3: "200 A/cm^2",
      o4: "1.28 A/cm^2",
      ans: "b",
    },
    {
      ques: "Consider a semiconductor with q=1.6×10^−19C,µn=1200cm2/V-s, kT/q=26mV,n=2×10^15cm−3,E=400V/cm and ∂n∂x=2×10^20cm−3\nCalculate the diffusion coefficient Dn.",
      o1:  "20 cm^2/s",
      o2: "31.2 cm^2/s",
      o3: "3.56 cm^2/s",
      o4: "15.8 cm^2/s",
      ans: "b",
    },
    {
      ques: "Consider a semiconductor with q=1.6×10^−19C,µn=1200cm2/V-s, kT/q=26mV,n=2×10^15cm−3,E=400V/cm and ∂n∂x=2×10^20cm−3\nCalculate the diffusion current density.",
      o1: "−998.4 A/cm^2",
      o2: "998.4 A/cm^2",
      o3: "−9.984 A/cm^2",
      o4: "9.984 A/cm^2",
      ans: "a",
    },
    {
      ques: "Consider a semiconductor with q=1.6×10^−19C,µn=1200cm2/V-s, kT/q=26mV,n=2×10^15cm−3,E=400V/cm and ∂n∂x=2×10^20cm−3\nCalculate the total current density.",
      o1 : "−743.6 A/cm^2",
      o2: "845.4 A/cm^2",
      o3: "−700 A/cm^2",
      o4: "−845.4 A/cm^2",
      ans: "d",
    },
    {
      ques: "n a semiconductor, the minority carrier concentration profile is given by the formula\nΔn(x)=Δn(0) exp(−x/L)\nWhich of the following statements is true\nStatement 1: A longer diffusion length L results in a slower decrease in minority carrier concentration with distance.\nStatement 2: A longer diffusion length L results in a faster decrease in minority carrier concentration with distance.",
      o1 : "None of the statements are correct",
      o2: "Statement 2 is correct",
      o3: "Both statements are correct",
      o4: " Statement 1 is correct",
      ans: "d",
    }
  ];
  let q4 = [
    {
      ques: "According to the depletion approximation, what primarily constitutes the electric field in the depletion region?",
      o1 : "Both free carriers and dopant atoms",
      o2: "Neutral atoms",
      o3: "Free electrons and holes",
      o4: "Ionized dopant atoms",
      ans: "d",
    },
    {
      ques: "The doping concentrations in an abrupt silicon pn junction at T=300K are Na=10^14cm−3 and Nd=10^18cm−3. Assume ni=10^10cm−3,kT/q=25mV at 300K,ϵSi=11.9,ϵ0=8.85×10^−14Fcm−1\nThe built-in voltage of the pn junction is ______ V.",
      o1: "2.1",
      o2: "3.5",
      o3: "1.4",
      o4: "0.7",
      ans: "d",
    },
    {
      ques: "The doping concentrations in an abrupt silicon pn junction at T=300K are Na=10^14cm−3 and Nd=10^18cm−3. Assume ni=10^10cm−3,kT/q=25mV at 300K,ϵSi=11.9,ϵ0=8.85×10^−14Fcm−1\nThe total depletion width of the pn junction is _______ µm",
      o1: "0.12",
      o2: "24.5",
      o3: "3.0",
      o4: "12",
      ans: "c",
    },
    {
      ques: "Find the magnitude of the electric field at the center of the depletion region of a Si pn junction with NA=ND=10^15atoms cm−3 and built-in potential of 0.6V . Take ϵSi=12ϵ0, where ϵ0=8.85×10^−14F/cm.",
      o1: "9.5MV/cm",
      o2: "9.5kV/cm",
      o3: "94.5kV/cm",
      o4: "94.5MV/cm",
      ans: "b",
    },
    {
      ques: "(EC-GATE 2016) Consider a silicon p-n junction with a uniform acceptor doping concentration of 10^17cm−3 on the p-side and a uniform donor doping concentration of 10^16cm−3 on the n-side. No external voltage is applied to the diode. Assume, ni=1.5×10^10cm−3 ,ϵSi=12×ϵ0=12×8.85×10^−14F/cm. The magnitude of charge per unit junction area (nC/cm2) in the depletion region on the p-side is .",
      o1 : "20",
      o2: "50",
      o3: "500",
      o4: "100",
      ans: "b",
    },
    {
      ques: "(EC-GATE 2018) A junction is made between p-Si with doping density NA1=10^15cm−3 and p-Si with doping density NA2=10^17cm−3 . Given Boltzmann constant K=1.38×10^−23JK−1 , electronic charge q=1.6×10^−19C. At room temperature (T = 300 K), the magnitude of the built-in potential (in Volts) will be .",
      o1:  "0.12",
      o2: "1.2",
      o3: "2.5",
      o4: "0.8",
      ans: "a",
    }
  ];
  let q5 = [
    {
      ques: "The capacitance of PN junction diode",
      o1 : "Increases linearly with the increase in the forward bias voltage",
      o2: "Decreases with the increase in the forward bias voltage",
      o3: "Does not change with the increase in the forward bias voltage",
      o4: "Increases exponentially with the increase in the forward bias voltage",
      ans: "d",
    },
    {
      ques: "The built in potential of an abrupt p-n junction is 0.75V. If it’s junction capacitance CJ at a reverse bias V of 1.25 V is 5 pF, the value of CJ(pF) when VR=7.25V is.",
      o1: "4.2 pF",
      o2: "1.5 pF",
      o3: "2.0 pF",
      o4: "2.5 pF",
      ans: "d",
    },
    {
      ques: "A Si bar is doped with donor impurities ND=2.25×10^15 atoms/cm^3. Given the intrinsic carrier concentration of Si at T=300K is ni=1.5×10^10cm^3 . Assuming complete impurity ionization, the equilibrium electron and hole concentration are :\n(Take kT/q=25 meV and ln(2)=0.693)",
      o1: "no=2.25×10^15cm−3,po=1.5×10^10cm−3",
      o2: "no=1.5×10^16cm−3,po=1.5×10^5cm−3",
      o3: "no=2.25×10^15cm−3,po=1×10^5cm−3",
      o4: "no=1.5×10^10cm−3,po=1.5×10^15cm−3",
      ans: "c",
    },
    {
      ques: "For every 10 degree increase in temperature, the reverse saturation current of a PN junction will increased by",
      o1: "4 times",
      o2: "2 times",
      o3: "10 times",
      o4: "remains the same",
      ans: "b",
    },
    {
      ques: "Consider the following parameters in a silicon pn junction: ND=NA=10^16 cm−3,ni=1.5×10^10 cm−3,Dp=25 cm2/s,Dn=10 cm2/s,τp=τn=5×10^−7s,ϵr=11.7 \nDetermine the ideal reverse-saturation current density in a silicon pn junction at T = 300K.",
      o1 : "4.16×10^−8 A/ cm2",
      o2: "4.16×10^−11 A/ cm2",
      o3: "4.16×10^−9 A/ cm2",
      o4: "4.16×10^−10 A/ cm2",
      ans: "b",
    },
    {
      ques: "What is the main difference between Zener and Avalanche breakdown in terms of carrier generation?",
      o1:  "Zener involves tunneling, Avalanche involves impact ionization",
      o2: "Zener occurs at high voltage, Avalanche occurs at low voltage",
      o3: "Zener creates fewer carriers, Avalanche creates more carriers",
      o4: "Zener involves minority carriers, Avalanche involves majority carriers",
      ans: "a",
    },
    {
      ques: "If the depletion region width of a p-n junction increases from 150 nm to 300 nm due to an increase in reverse bias voltage, by what factor does the junction capacitance change?",
      o1:  "0.5",
      o2: " 4",
      o3: "2",
      o4: "0.25",
      ans: "a",
    },
    {
      ques: "In the reverse bias, a change in temperature results in a shift in the reverse saturation current, Js. Choose the correct temperature relation along with the reason.",
      o1:  "TC<TD as Js∝n_i^2",
      o2: "TD<TC as Js∝n_i",
      o3: "TC>TD as Js∝√n_i",
      o4: "TC>TD as Js∝1/n_i^2",
      ans: "a",
    }
  ];
  let q6 = [
    {
      ques: "How does the depletion region of a Schottky diode change under reverse bias?",
      o1 : "It remains unchanged regardless of the bias",
      o2: "It narrows as the reverse voltage increases",
      o3: "it narrows, reducing the barrier height",
      o4: "it widens, increasing the barrier height",
      ans: "d",
    },
    {
      ques: "In the flat band condition of a MOS capacitor",
      o1: "The surface of the semiconductor is depleted of carriers",
      o2: "The semiconductor is in strong version",
      o3: "The surface potential is at its maximum",
      o4: "The energy bands of the semiconductor are flat, with no band bending",
      ans: "d",
    },
    {
      ques: "Consider a contact between tungsten and n-type silicon doped to ND=10^16cm−3 at T=300 K. Answer the following questions in a metal-semiconductor diode for zero applied bias. The workfunction of tungsten is 4.55 V and the electron affinity of silicon is 4.01 V.\n\nDetermine the theoretical barrier height",
      o1: "0.81 eV",
      o2: "0.85 eV",
      o3: "0.54 eV",
      o4: "0.75 eV",
      ans: "c",
    },
    {
      ques: "Consider a contact between tungsten and n-type silicon doped to ND=10^16cm−3 at T=300 K. Answer the following questions in a metal-semiconductor diode for zero applied bias. The workfunction of tungsten is 4.55 V and the electron affinity of silicon is 4.01 V.\n\nDetermine the built-in potential barrier",
      o1: "0.40 V",
      o2: "0.34 V",
      o3: "0.45 V",
      o4: "0.23 V",
      ans: "b",
    },
    {
      ques: "The Schottky barrier height is a key parameter for a metal-semiconductor junction. For a metal, N-type semiconductor, Φ_bN is given by which of the following expressions?",
      o1 : "ΦbN = χS − ΦM",
      o2: "ΦbN = ΦM − χS",
      o3: "ΦbN = χS + ΦM",
      o4: "ΦbN = χS × ΦM",
      ans: "b",
    }
  ];
  let q7 = [
    {
      ques: "For a p-type MOS capacitor, increasing the acceptor doping concentration will:",
      o1 : "Decrease the threshold voltage",
      o2: "Have no effect on the threshold voltage",
      o3: "Reverse the type of inversion layer",
      o4: "Increase the threshold voltage",
      ans: "d",
    },
    {
      ques: "In a MOS capacitor with an oxide layer thickness of 10 nm, the maximum depletion layer thickness is 100 nm. The permittivities of the semiconductor and the oxide layer are ϵs and ϵox respectively. Assuming, ϵs/ϵox=3, the ratio of the maximum capacitance to the minimum capacitance of this MOS capacitor is.",
      o1: "1.5",
      o2: "3.5",
      o3: "10",
      o4: "4.3",
      ans: "d",
    },
    {
      ques: "In a MOS capacitor, inversion is achieved when:",
      o1: "The depletion region is fully depleted.",
      o2: "The surface potential equals the applied gate voltage.",
      o3: "The surface potential is greater than or equal to twice the Fermi potential.",
      o4: "The gate voltage is negative for an n-type substrate.",
      ans: "c",
    },
    {
      ques: "What is the significance of the flat-band voltage (VFB) in a MOS capacitor?",
      o1: "It is the voltage at which the oxide capacitance is minimized.",
      o2: "It is the voltage at which the surface potential is zero.",
      o3: "t represents the voltage required to achieve strong inversion.",
      o4: "It corresponds to the threshold voltage.",
      ans: "b",
    },
    {
      ques: "Given a p-type silicon MOS capacitor with a doping concentration of NA=1×10^17cm−3. The permittivity of silicon is ϵsi=11.7×8.85×10^−14 F/cm. Calculate the maximum depletion width when the surface potential reaches 2φF, where φF is the Fermi potential. Assume φF=0.3V.",
      o1 : "40 nm",
      o2: "88 nm",
      o3: "10 nm",
      o4: "200 nm",
      ans: "b",
    }
  ];
  let q8 = [
    {
      ques: "Which of the following are correct in reference to CV measurements?\n\nStatement 1 : The capacitance of a MOS capacitor in strong inversion is larger when measured at high frequencies than at low frequencies.\nStatement 2 : At low frequencies there is enough time for generation of carriers in the depletion region, and movement of inversion charges to the oxide silicon interface.",
      o1 : "Statement 1 and 2 are true. Statement 2 is not the correct explanation for the statement",
      o2: "Statement 1 is true, Statement 2 is false",
      o3: "Statement 1 and 2 are false",
      o4: "Statement 1 is false, Statement 2 is true",
      ans: "d",
    },
    {
      ques: "A MOS capacitor uses a high-k dielectric material with a relative permittivity κhigh−k=25 as a replacement for a traditional SiO2 layer. The SiO2 layer has a relative permittivity κSiO2=3.9 and a thickness t_SiO2=10nm.\n\nCalculate the equivalent oxide thickness (EOT) if the high-k dielectric is used to achieve the same capacitance as the SiO2 layer.",
      o1: "25 nm",
      o2: "200 nm",
      o3: "100 nm",
      o4: "65 nm",
      ans: "d",
    },
    {
      ques: "Given an ideal MOS capacitor with a 10nm gate oxide on P-type silicon (Na=1×10^16cm−3) : Include the effects of the flat band voltage, assuming an n+ polysilicon gate and fixed oxide charges of 5×10^10q(C/cm2).\n(Take ϵox=3.9,ni=10^10cm−3,kT/q=26 mV,ϵsi=11.8)\n\nCalculate the maximum depletion width",
      o1: "1 µm",
      o2: "5 µm",
      o3: "0.306 µm",
      o4: "2 µm",
      ans: "c",
    },
    {
      ques: "Given an ideal MOS capacitor with a 10nm gate oxide on P-type silicon (Na=1×10^16cm−3) : Include the effects of the flat band voltage, assuming an n+ polysilicon gate and fixed oxide charges of 5×10^10q(C/cm2).\n(Take ϵox=3.9,ni=10^10cm−3,kT/q=26 mV,ϵsi=11.8)\n\nDetermine the minimum capacitance in F/cm2",
      o1: "3 × 10^−3",
      o2: "3.15 × 10^−8",
      o3: "5 × 10^−10",
      o4: "2 × 10^−5",
      ans: "b",
    },
    {
      ques: "Which of the following statements best explains the behavior of the capacitance curve as the doping concentration increases ?",
      o1 : "The minimum capacitance remains unchanged, but the curve shifts towards lower gate",
      o2: "The minimum capacitance increases, and the curve shifts towards higher gate voltages.",
      o3: "The minimum capacitance decreases, and the curve shifts towards higher gate voltages.",
      o4: "The minimum capacitance decreases, and the curve shifts towards lower gate voltages.",
      ans: "b",
    },
    {
      ques: "If we have two MOS Cap with different oxide thickness as tox=50 nm and tox=150 nm. Compare the results\n\nIf the oxide thickness is increased, the C-V characteristics shifts",
      o1:  "left",
      o2: "down",
      o3: "up",
      o4: "no change",
      ans: "b",
    },
    {
      ques: "If we have two MOS Cap with different oxide thickness as tox=50 nm and tox=150 nm. Compare the results\n\nIf the oxide thickness is decreased, the VT shifts",
      o1: "left",
      o2: "right",
      o3: "up",
      o4: "no change",
      ans: "a",
    },
    {
      ques: "A MOS capacitor is fabricated on p-type Si (silicon) where the metal work function is 4.1eV , and the electron affinity of Si is 4.0 eV. The energy difference between the conduction band minimum and the Fermi energy level is EC−EF=0.9eV, where EC and EF are the conduction band minimum and the Fermi energy levels of Si, respectively.\nGiven: \nϵox=3.9,ϵ0=8.85×10^−14 F/cm, tox=0.1µm, and electron charge q=1.6×10^−19 C.\n\nIf the measured flat band voltage of this capacitor is −1 V, then the magnitude of the fixed charge at the oxide-semiconductor interface, in nC/cm^2 , is",
      o1: "6.9",
      o2: "69",
      o3: "0.69",
      o4: "0.069",
      ans: "a",
    }
  ];
  let q9 = [
    {
      ques: "In a MOSFET operating in the saturation region, the channel length modulation effect causes________ .",
      o1 : "a decrease in the unity-gain cutoff frequency",
      o2: " an increase in the gate-source capacitance",
      o3: " a decrease in the Transconductance",
      o4: " a decrease in output resistance",
      ans: "d",
    },
    {
      ques: "Consider an n-channel MOSFET with the following parameters: conductance parameter κ=1 mA/V2, and the threshold voltage Vth=0.75 V. The drain current ID for the gate to source voltage VGS=2Vth and VDS=1 V(in mA) is .",
      o1: "5.1",
      o2: "2.5",
      o3: "4.5",
      o4: "0.28",
      ans: "d",
    },
    {
      ques: "For a short-channel nMOSFET with p-type Silicon as substrate, the critical field at which electron saturation occurs is around 1.5V/µm, and the saturation velocity vsat approximately equals 105m/s. Based on the figure below depicting the velocity saturation effect, choose the incorrect statement",
      o1: " The velocity of the carriers tends to saturate due to scattering effects.",
      o2: "The slope of the region before reaching critical electric field strength Ec represents carrier mobility",
      o3: "For lower field strengths, carrier mobility is not constant.",
      o4: "Velocity-saturation effects are less pronounced in PMOS transistors.",
      ans: "c",
    },
    {
      ques: "A silicon MOSFET has the following parameters: Na=10^16/cm3,tox=12 nm,ϵSiO2=3.9,ϵSi=11.7,and φf=0.3473V. The body effect coefficient (γ) is _____ (V12).",
      o1: "0.40",
      o2: "0.20",
      o3: "0.45",
      o4: "0.6",
      ans: "b",
    },
    {
      ques: "The subthreshold swing is defined as:",
      o1 : " The decrease in drain voltage necessary to increase the drain current by a factor of 10.",
      o2: " The increase in gate voltage necessary to increase the drain current by a factor of 10.",
      o3: " The increase in gate voltage necessary to increase the drain current by a factor of 10.",
      o4: " The decrease in gate voltage necessary to increase the drain current by a factor of 10.",
      ans: "b",
    },
    {
      ques: "What is the main function of the p-channel MOSFET in a CMOS inverter circuit?",
      o1 : "To pull the output to VDD when the input is low",
      o2: "To invert the signal",
      o3: "To provide a constant current source",
      o4: "To pull the output to ground when the input is high",
      ans: "a",
    },
    {
      ques: "(EC-GATE 2024) An NMOS transistor operating in the linear region has ID of 5 µA at VDS of 0.1 V. Keeping VGS constant, the VDS is increased to 1.5 V. Given that WµnCox/L=50 µA/V2 . Then, the transconductance at the new operating point (in µA/V)is ________",
      o1 : "52.5",
      o2: "40.7",
      o3: "60.3",
      o4: "45.2",
      ans: "a",
    }
  ];
  let q10 = [
    {
      ques: "Consider a n-channel MOSFET where the lateral and vertical dimensions (W,L) are reduced by 30%, and both the supply voltage VDD and threshold voltage Vth are also reduced by 30%. When this transistor is connected to a load capacitor it is found that the capacitance and delay are reduced by 30%. Then the dynamic power dissipation reduces by ___________(in % )?",
      o1 : "51",
      o2: "42",
      o3: "30",
      o4: "70",
      ans: "a",
    },
    {
      ques: "Given below are two statements regarding the characteristics of a short channel MOSFET.\n\nS1 : Typically, the channel lengths for a short channel MOSFET are much larger than the depletion widths of the source and drain junctions.\nS2 : The current in a short channel MOSFET shows significant deviations from the square law theory.",
      o1: "Both Statement S1 and S2 are true",
      o2: "Both Statement S1 and S2 are false",
      o3: "Statement S1 is true and S2 is false",
      o4: "Statement S1 is false and S2 is true",
      ans: "d",
    },
    {
      ques: "What is the primary mechanism responsible for the reduction in threshold voltage Vth in short- channel MOSFETs?",
      o1: "  Increased body effect",
      o2: " Increased gate oxide thickness",
      o3: "Drain-induced barrier lowering (DIBL)",
      o4: " Decreased gate-to-drain capacitance",
      ans: "c",
    },
    {
      ques: "Which of the following is a direct consequence of the narrow-channel effect (NCE) in MOSFETs?",
      o1: "Increased channel mobility due to a smaller channel width",
      o2:  "Reduced gate-to-source capacitance as channel width decreases",
      o3: " Decreased subthreshold leakage current with a narrower channel",
      o4: "Increased threshold voltage as channel width decreases",
      ans: "d",
    },
    {
      ques: "Strained silicon is used to improve MOSFET performance. How does it enhance device characteristics, particularly in terms of carrier mobility?",
      o1 : " Reduces threshold voltage by decreasing mobility degradation",
      o2: " Increases current drive by enhancing carrier mobility",
      o3: " Increases gate capacitance to offset mobility degradation",
      o4: " Reduces power consumption by lowering gate capacitance",
      ans: "b",
    },
    {
      ques: "The use of high-k dielectrics in MOS transistors is motivated by the need to reduce gate leakage while maintaining high capacitance. Which of the following is a consequence of using a high-k dielectric in place of SiO2 in terms of the band diagram?",
      o1 : "The equivalent oxide thickness (EOT) decreases while maintaining the same capacitance.",
      o2: "The bandgap of the high-k material is larger than that of SiO2.",
      o3: " The effective electric field across the gate is higher.",
      o4: "The conduction band of the high-k material lies lower than that of SiO2",
      ans: "a",
    },
    {
      ques: "Choose the correct option from the following statements regarding the FinFET technology.\n\nA : FinFET offers better electrostatic control over the gate than planar MOSFETS\nB : For a similar operating voltage, planar MOSFETs offer much lower delays than FinFETs.",
      o1 : " A is true and B is false",
      o2: "Both A and B are true",
      o3: "A is false and B is true",
      o4: "Neither A is true nor B is true.",
      ans: "a",
    }
  ];
  let q11 = [
    {
      ques: "Two beams of light with the same initial intensity I0 pass through two different materials with absorption coefficients α1=10^2 cm−1 and α2=10^4 cm−1. After passing through a distance x=1 cm, which of the following statements is true about the light intensities I1(x) and I2(x)? (Recall: Beer - Lambert’s law)",
      o1 : "I1(x)=I2(x)",
      o2: "Both intensities remain unchanged",
      o3: "I1(x)<I2(x)",
      o4: "I1(x)>I2(x)",
      ans: "d",
    },
    {
      ques: "Consider GaAs at T=300 K. Assume the photon intensity at a particular point is Iν(x)=0.05 W/cm2 at a wavelength of 0.793 µm. The typical absorption coefficient of sunlight is 10^4cm−1 . What is the steady state excess carrier concentration per cm3 if the excess minority carrier lifetime is 10^−7s ?",
      o1: "2×10^16",
      o2: "2×10^17",
      o3: "2×10^21",
      o4: "2×10^14",
      ans: "d",
    },
    {
      ques: "A single solar cell with a maximum solar efficiency of 12.5% produces a voltage of 1V and maximum current 2A. If the solar insolation is 1000 W/m2 , what could be the area of the solar cell in cm2?",
      o1: "1600",
      o2: "80",
      o3: "160",
      o4: "360",
      ans: "c",
    },
    {
      ques: "A photodiode has a responsivity of 0.5 A/W at 850 nm. Find the % efficiency of the detector",
      o1: "43",
      o2:  "100",
      o3: "26",
      o4: "73",
      ans: "d",
    },
    {
      ques: "Consider the following statement and reason based on a solar cell’s current-voltage (I-V) characteristic and choose the correct option.\n\nAssertion: A solar cell must be operated in the fourth quadrant of the junction I-V characteristic.\nReason: In the fourth quadrant, the solar cell absorbs electrical energy from the load to function effectively.",
      o1 : "Both Assertion and Reason are true, and the Reason is the correct explanation of the Assertion.",
      o2: " The Assertion is true, but the Reason is false",
      o3: " Both Assertion and Reason are false.",
      o4: " Both Assertion and Reason are true, but the Reason is not the correct explanation of the Assertion.",
      ans: "b",
    },
    {
      ques: "Consider a silicon pn junction at T=300K with the parameters Na=5×10^18cm−3,Nd=1×10^16cm−3,Dn=25cm2/s,Dp=10cm2/s,τn0=5×10^−7s,τp0=1×10^−7s. Let the photocurrent density be JL=IL/A=15mA/cm2. Calculate the silicon PN-junction solar cell’s open-circuit voltage (in V).",
      o1 : "0.3",
      o2: "2.25",
      o3: "1.75",
      o4: "3.5",
      ans: "a",
    },
    {
      ques: "Consider two silicon PIN photodiodes A and B with identical intrinsic region width of W=20 µm. Assume that the photon flux is 10^17cm−2s−1. Calculate the ratio of the photocurrent densities (in mA/cm2) for photodiodes A and B if the absorption coefficients are αA=10^3cm−1 and αB=10^2cm−1 respectively.",
      o1 : "4.8",
      o2: "2.5",
      o3: "6.1",
      o4: "3.8",
      ans: "a",
    },
    {
      ques: "An Avalanche photodiode has a quantum efficiency of 50% at a wavelength of 500 nm in the absence of multiplication. If the device is operated with a reverse bias to give a multiplication factor of 8, calculate the responsivity in A/W.",
      o1 : "1.6 V",
      o2: "4.0 V",
      o3: " 2.4 V",
      o4: "0.5 V",
      ans: "a",
    },
    {
      ques: "GATE ECE -2024 The photocurrent of a PN junction diode solar cell is 1 mA. The voltage corresponding to its maximum power point is 0.3V. If the thermal voltage VT is 30 mV , the reverse saturation current of the diode Isc (in nA) is_________",
      o1 : "4.13",
      o2: "3.5",
      o3: " 1.75",
      o4: "2.25",
      ans: "a",
    }
  ];
  let q12 = [
    {
      ques: "Which of the following can increase the light emission efficiency in a semiconductor material?",
      o1 : "Increasing the non-radiative recombination rate relative to the radiative recombination rate",
      o2: "Both intensities remain unchanged",
      o3: "Decreasing the radiative recombination rate relative to the non-radiative recombination rate",
      o4: "Increasing the radiative recombination rate relative to the non-radiative recombination rate",
      ans: "d",
    },
    {
      ques: "Given two statements on Photo-luminescence and Electro-luminescence:\n\nS1 : Photo-luminescence is a phenomenon of re-emission of light after absorbing a photon of higher energy.\nS2 : Electro-luminescence is a phenomenon of photon emission that supplies current to the semiconductor. Choose the correct option.",
      o1: "Both S1 and S2 are false",
      o2: "Both S1 and S2 are true",
      o3: "S1 is false and S2 is true",
      o4: "S1 is true and S2 is false",
      ans: "d",
    },
    {
      ques: "Determine the internal quantum efficiency generated within a device when it has a radiative recombination lifetime of 80 ns and a total carrier recombination lifetime of 40 ns.",
      o1: " 30%",
      o2: "80%",
      o3: "50%",
      o4: "20%",
      ans: "c",
    },
    {
      ques: "Consider the theoretical emission spectrum of an LED. The full width at half maximum (FWHM) of the emission line is 1.8 kT(k- Boltzmann’s constant in eV/K). Calculate the spectral linewidth ∆λ of the LED emitting at a wavelength 400 nm at a temperature of T=300K.",
      o1: "4.5 nm",
      o2:  "5 nm",
      o3: " 1.2 nm",
      o4: "6.05 nm",
      ans: "d",
    },
    {
      ques: "If source A represents an LED and source B represents a laser, which source (A or B) exhibits higher monochromaticity?",
      o1 : "Source A exhibits higher monochromaticity due to its broader range of emitted wavelengths",
      o2: "Source B exhibits higher monochromaticity due to its narrow emission at a specific wavelength",
      o3: "Both sources exhibit equal monochromaticity",
      o4: "Monochromaticity cannot be determined from the spectra provided",
      ans: "b",
    },
    {
      ques: "CSIR NET PH 2017: If the coefficient of stimulated emission for a particular transition is 2×10^19m3W−1s−3 and the emitted photon is at wavelength 300 nm, then the lifetime of the excited state is approximately?",
      o1 : "80 ns",
      o2: "20 ns",
      o3: "40 ns",
      o4: "100 ns",
      ans: "a",
    }
  ];

const q = q1.concat(q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12);

//database here ::::::::::::::::::::::::::::::::::::::::::

start.addEventListener("click", function(){
    box.style.visibility = "visible";
    this.style.visibility = "hidden";
    next.style.visibility = "hidden";
    for(let i =0; i<input.length ; i++){
        input[i].checked = false;
     }
   
     q = shuffle(q); 

})

function shuffle(array) {  
    for (let i = array.length - 1; i> 0; i--) {  
    const j = Math.floor(Math.random() * (i + 1));  
    [array[i], array[j]] = [array[j], array[i]];  
    }  
    return array;  
    }  

    let i = 0;
    next.addEventListener("click", function(){

        for(let i =0; i<input.length ; i++){
            input[i].checked = false;
         }

         num.innerText = `Ques : ${i+1}/${q.length}`;
         sc.innerText= `Score : ${score}/${i}`;
         startTimer();
         next.style.visibility = "hidden";
        submit.style.visibility = "visible";
        if(i==q.length){
            box.style.visibility = "none";
            alert(`Your Score is ${score}/${q.length} in ${seconds/60} minutes`);
            stopTimer();
            location.reload();
        }

            lista.add("inp");
            listb.add("inp");
            listc.add("inp");
            listd.add("inp");
            listo1.remove("correct");
            listo1.remove("wrong");
            listo2.remove("correct");
            listo2.remove("wrong");
            listo3.remove("correct");
            listo3.remove("wrong");
            listo4.remove("correct");
            listo4.remove("wrong");
                ques.innerText = `Q.  ${q[i].ques}` ;
                o1.innerText = `(a)  ${q[i].o1}`;
                o2.innerText = `(b)  ${q[i].o2}`;
                o3.innerText = `(c)  ${q[i].o3}`;
                o4.innerText = `(d)  ${q[i].o4}`;
            i++;
  
    })
    reset.addEventListener("click",function(){
        location.reload();
    })

    submit.addEventListener("click", function(){

        if(a.checked || b.checked || c.checked || d.checked)  
   {         next.style.visibility = "visible";
            let ans = q[i-1].ans;
            console.log(ans);
            //console.log(a);

            lista.remove("inp");
            listb.remove("inp");
            listc.remove("inp");
            listd.remove("inp");
            
            if(ans=="a" && a.checked == true){ 
                console.log("Correct answer");
                listo1.add("correct"); 
                score ++;       
                correctaudio.play();
            }

           else if(ans=="b" && b.checked == true) {listo2.add("correct"); score++; correctaudio.play(); }
           else if(ans=="c" && c.checked == true){ listo3.add("correct"); score++; correctaudio.play();}
           else if(ans=="d" && d.checked == true) {listo4.add("correct"); score++; correctaudio.play(); }

           else {
            
            if(ans=="a") listo1.add("correct"); 
            if(ans=="b") listo2.add("correct");
            if(ans=="c") listo3.add("correct");
            if(ans=="d") listo4.add("correct");

            wrongaudio.play();

              if(a.checked==true){
                listo1.add("wrong");
              }

              else if (b.checked==true){
                listo2.add("wrong");
              }

              else if (c.checked==true){
                listo3.add("wrong");
              }

              else if (d.checked==true){
                listo4.add("wrong");
              }
           };

           this.style.visibility = "hidden";
        }
           else alert("Please select an option!");  
          })

        
function formatTime(sec) {
  const hrs = Math.floor(sec / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  const secs = sec % 60;
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTime() {
  seconds++;
  document.getElementById('time').textContent = formatTime(seconds);
}

function startTimer() {
  if (!isRunning) {
      timer = setInterval(updateTime, 1000);
      isRunning = true;
  }
}

function stopTimer() {
  if (isRunning) {
      clearInterval(timer);
      isRunning = false;
  }
}
