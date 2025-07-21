import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CalendrierPage = () => {
  const distributions = [
    {
      id: 1,
      date: "2025-07-21",
      time: "19:00 - 21:00",
      location: "Place de la République",
      address: "Place de la République, Centre-ville",
      mealType: "Repas chaud",
      volunteers: 8,
      status: "Aujourd'hui",
      description: "Soupe, plat principal et dessert",
    },
    {
      id: 2,
      date: "2025-07-22",
      time: "12:00 - 14:00",
      location: "Parc Municipal",
      address: "Avenue des Platanes, Quartier Nord",
      mealType: "Déjeuner",
      volunteers: 6,
      status: "Demain",
      description: "Sandwichs, fruits et boissons chaudes",
    },
    {
      id: 3,
      date: "2025-07-23",
      time: "18:30 - 20:30",
      location: "Gare Centrale",
      address: "Esplanade de la Gare, Centre-ville",
      mealType: "Repas chaud",
      volunteers: 10,
      status: "Mercredi",
      description: "Menu complet avec entrée, plat et dessert",
    },
    {
      id: 4,
      date: "2025-07-24",
      time: "19:00 - 21:00",
      location: "Place Saint-Jean",
      address: "Place Saint-Jean, Vieux quartier",
      mealType: "Repas chaud",
      volunteers: 7,
      status: "Jeudi",
      description: "Soupe, plat du jour et fruit",
    },
    {
      id: 5,
      date: "2025-07-25",
      time: "12:00 - 14:00",
      location: "Centre Social Bellevue",
      address: "Rue de la Paix, Quartier Bellevue",
      mealType: "Déjeuner",
      volunteers: 5,
      status: "Vendredi",
      description: "Repas complet et café",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aujourd'hui":
        return "bg-primary text-white";
      case "Demain":
        return "bg-orange-500 text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Calendrier des distributions
          </h1>
          <p className="text-xl text-muted-foreground">
            Retrouvez toutes nos distributions de repas de la semaine
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-soft">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-muted-foreground">Distributions cette semaine</div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">36</div>
              <div className="text-muted-foreground">Bénévoles mobilisés</div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-muted-foreground">Lieux de distribution</div>
            </CardContent>
          </Card>
        </div>

        {/* Distributions List */}
        <div className="space-y-6">
          {distributions.map((distribution) => (
            <Card key={distribution.id} className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">
                        {formatDate(distribution.date)}
                      </CardTitle>
                      <Badge className={getStatusColor(distribution.status)}>
                        {distribution.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg">
                      {distribution.mealType} • {distribution.location}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">{distribution.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">{distribution.location}</div>
                      <div className="text-sm text-muted-foreground">
                        {distribution.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">{distribution.volunteers} bénévoles</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Voir sur la carte
                    </Button>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-accent rounded-lg">
                  <h4 className="font-medium text-accent-foreground mb-1">Menu</h4>
                  <p className="text-sm text-muted-foreground">
                    {distribution.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-warm text-white shadow-warm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Besoin d'aide ou envie de participer ?
              </h3>
              <p className="text-white/90 mb-6">
                Contactez-nous pour plus d'informations ou pour rejoindre nos équipes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Nous contacter
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Devenir bénévole
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CalendrierPage;