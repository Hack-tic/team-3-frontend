import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Pagination} from "@heroui/react";
import { PhoneCall } from "lucide-react";

  

  const rows = [
    {
      key: "1",
      nomentreprise: "Info Tools Solutions",
      nomcontact: "Kherbouche Youcef",
      Poste: "Gérant",
      secteur: "IT/Security",
      tlph: "0770371887 / 0780228406",
      email: "contact@infotoolssolutions.com"
    },
    {
      key: "2",
      nomentreprise: "AITech",
      nomcontact: "lmane Nassim",
      Poste: "--",
      secteur: "IT/Security",
      tlph: "0671 410 427",
      email: "nassim@ai-technologies.com"
    },
    {
      key: "3",
      nomentreprise: "BOOST IT TECH",
      nomcontact: "HOUARIAbdelkrim",
      Poste: "Manager",
      secteur: "IT/Security",
      tlph: "(0) 23 97 55 55 / 0770118249",
      email: "abdelkrim.h@boostit.dz"
    },
    {
      key: "4",
      nomentreprise: "HYDRAPHARM",
      nomcontact: "AMMACHI Salah Eddine",
      Poste: "Human Ressource Business Partner",
      secteur: "Domaine Medical",
      tlph: "0770842644",
      email: "salaheddine.ammachi@groupehydrapharm.com"
    },
    {
      key: "5",
      nomentreprise: "IncubMe",
      nomcontact: "Lilia CHORFI",
      Poste: "Chargée RE",
      secteur: "Formations / Incubateurs",
      tlph: "0770615333",
      email: "lilia.chorfi@incubme.com"
    },
    {
      key: "6",
      nomentreprise: "BH advisory",
      nomcontact: "Hadjoudj",
      Poste: "Consultant",
      secteur: "Boite de dev/comm/Marketing",
      tlph: "0560 06 44 25",
      email: "contact@bh-dz.com"
    },
    {
      key: "7",
      nomentreprise: "EURL BRENCO",
      nomcontact: "Hamidani Mounira",
      Poste: "HR Manager",
      secteur: "Consulting",
      tlph: "0560 06 44 25",
      email: "mhamidani@brenco-algerie.com"
    },
    {
      key: "8",
      nomentreprise: "KD CONCEPT",
      nomcontact: "--",
      Poste: "Responsable",
      secteur: "IT/Security",
      tlph: "023 89 45 11",
      email: "contact@kdconcept.dz"
    },
    {
      key: "9",
      nomentreprise: "ALCOMNET SARL",
      nomcontact: "IHARKOUKEN Idir",
      Poste: "--",
      secteur: "Consulting",
      tlph: "44023022 / 0560047746",
      email: "contact@alcomnet.com"
    },
    {
      key: "10",
      nomentreprise: "COSOFT",
      nomcontact: "ABDERRAZAK Nabil",
      Poste: "Gérant",
      secteur: "IT/Security",
      tlph: "--",
      email: "sarlcosoft@gmail.com",
    },
    
];

  
  const columns = [
    {
      key: "nomentreprise",
      label: "Nom Entreprise",
    },
    {
      key: "secteur",
      label: "Secteur d’activité",
    },
    {
      key: "tlph",
      label: "Telephone",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "nomcontact",
      label: "Nom contact",
    },
    {
      key: "Poste",
      label: "Poste",
    },
    {
        key: "actions",
        label: "Passer l'appel",
    },
  ];

function OrgaEntrepriseTable() {
  return (
    <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
  )
}

export default OrgaEntrepriseTable