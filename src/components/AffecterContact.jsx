import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
  Pagination,
} from "@heroui/react";

const rows = [
  {
    key: "1",
    nomentreprise: "Info Tools Solutions",
    premierappel: "Fait",
    remarque: "Intéressé par une collaboration future.",
    dernierappelconfirmation: "Fait",
    mailformulaire: "envoyé",
    formulaireRemplie: "oui",
  },
  {
    key: "2",
    nomentreprise: "AITech",
    premierappel: "Ça ne répond pas",
    remarque: "Demande de rappel le mois prochain.",
    dernierappelconfirmation: "--",
    mailformulaire: "non envoyé",
    formulaireRemplie: "non",
  },
  {
    key: "3",
    nomentreprise: "BOOST IT TECH",
    premierappel: "Numéro indisponible",
    remarque: "Intérêt pour les services cloud.",
    dernierappelconfirmation: "Ça ne répond pas",
    mailformulaire: "envoyé",
    formulaireRemplie: "oui",
  },
  {
    key: "4",
    nomentreprise: "HYDRAPHARM",
    premierappel: "Fait",
    remarque: "Besoin d'une proposition détaillée.",
    dernierappelconfirmation: "Fait",
    mailformulaire: "envoyé",
    formulaireRemplie: "oui",
  },
  {
    key: "5",
    nomentreprise: "IncubMe",
    premierappel: "Ça ne répond pas",
    remarque: "Intéressé par les formations proposées.",
    dernierappelconfirmation: "--",
    mailformulaire: "non envoyé",
    formulaireRemplie: "oui",
  },
  {
    key: "6",
    nomentreprise: "BH advisory",
    premierappel: "Fait",
    remarque: "Souhaite une démonstration du produit.",
    dernierappelconfirmation: "Ça ne répond pas",
    mailformulaire: "non envoyé",
    formulaireRemplie: "non",
  },
  {
    key: "7",
    nomentreprise: "EURL BRENCO",
    premierappel: "Numéro indisponible",
    remarque: "Recherche des solutions de consulting.",
    dernierappelconfirmation: "Fait",
    mailformulaire: "envoyé",
    formulaireRemplie: "oui",
  },
  {
    key: "8",
    nomentreprise: "KD CONCEPT",
    premierappel: "--",
    remarque: "Intéressé par une collaboration à long terme.",
    dernierappelconfirmation: "--",
    mailformulaire: "non envoyé",
    formulaireRemplie: "non",
  },
  {
    key: "9",
    nomentreprise: "ALCOMNET SARL",
    premierappel: "Ça ne répond pas",
    remarque: "Demande de devis pour services IT.",
    dernierappelconfirmation: "--",
    mailformulaire: "non envoyé",
    formulaireRemplie: "non",
  },
  {
    key: "10",
    nomentreprise: "COSOFT",
    premierappel: "Fait",
    remarque: "Intéressé par les solutions logicielles.",
    dernierappelconfirmation: "Fait",
    mailformulaire: "envoyé",
    formulaireRemplie: "oui",
  },
];

const columns = [
  {
    key: "nomentreprise",
    label: "Nom Entreprise",
  },
  {
    key: "premierappel",
    label: "Premier appel",
  },
  {
    key: "remarque",
    label: "Remarque",
  },
  {
    key: "dernierappelconfirmation",
    label: "Dernier appel confirmation",
  },
  {
    key: "mailformulaire",
    label: "Mail formulaire",
  },
  {
    key: "formulaireRemplie",
    label: "Formulaire rempli",
  },
];

const items = [
  {
    key: "1",
    label: "Samy Ouanes",
  },
  {
    key: "2",
    label: "Ines Kellou",
  },
  {
    key: "3",
    label: "Fellahi Abderraouf",
  },
  {
    key: "4",
    label: "Tariq Dahmani",
  },
];

// Define status color mapping
const statusColorMap = {
  Fait: "success",
  "Ça ne répond pas": "warning",
  "Numéro indisponible": "danger",
  "--": "default",
  "non envoyé": "primary",
   "envoyé": "secondary",
    "oui": "success",
    "non": "danger",
};

function AffecterContact() {
  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
        case "premierappel":
        case "dernierappelconfirmation":
        case "mailformulaire":
        case "formulaireRemplie":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[cellValue]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Afecter des entreprises</h2>

        {/* Barre de recherche et filtres */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-4 gap-4">
          <Input label="Rechercher" type="text" className="flex-grow" />

          <div className="flex gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">Selectionner un organisateur</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={items}>
                {(item) => (
                  <DropdownItem
                    key={item.key}
                    className={item.key === "delete" ? "text-danger" : ""}
                    color={item.key === "delete" ? "danger" : "default"}
                  >
                    {item.label}
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <Table
          aria-label="Example static collection table"
          color="primary"
          defaultSelectedKeys={["2", "3"]}
          selectionMode="multiple"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key} className="px-8">{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key} className="hover:bg-gray-100">
                {(columnKey) => (
                  <TableCell >{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex justify-between mt-4">
          <Button color="primary" className="pl-5 pr-5 font-bold">
            Assigner
          </Button>
          <Pagination initialPage={1} total={10} />
        </div>
      </div>
    </>
  );
}

export default AffecterContact;