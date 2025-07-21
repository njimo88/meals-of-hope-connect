import { Link } from "react-router-dom";
import { Calendar, Users, Heart, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ensemble contre la faim
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nous distribuons des repas chauds aux personnes dans le besoin. 
            Rejoignez notre mission de solidarité et d'entraide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/calendrier">
                <Calendar className="w-5 h-5" />
                Voir le calendrier
              </Link>
            </Button>
            <Button asChild variant="warm" size="lg">
              <Link to="/aider">
                <Heart className="w-5 h-5" />
                Comment aider
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Repas distribués ce mois</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <div className="text-muted-foreground">Bénévoles actifs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Points de distribution</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Nos services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Distributions régulières</CardTitle>
                <CardDescription>
                  Repas chauds distribués tous les jours aux points fixes de la ville
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Accompagnement social</CardTitle>
                <CardDescription>
                  Aide pour les démarches administratives et orientation vers d'autres services
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Écoute et soutien</CardTitle>
                <CardDescription>
                  Moments d'échange et de convivialité pour rompre l'isolement
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Distribution */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Prochaine distribution
          </h2>
          <Card className="shadow-warm bg-gradient-warm text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Calendar className="w-8 h-8 mb-2" />
                  <div className="font-semibold">Aujourd'hui</div>
                  <div className="text-white/90">21 Juillet 2025</div>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-8 h-8 mb-2" />
                  <div className="font-semibold">19h00 - 21h00</div>
                  <div className="text-white/90">Repas chaud</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 mb-2" />
                  <div className="font-semibold">Place de la République</div>
                  <div className="text-white/90">Centre-ville</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Rejoignez notre mission
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Que ce soit par un don, du bénévolat ou simplement en partageant notre cause, 
            chaque geste compte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/aider">
                Devenir bénévole
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="w-5 h-5" />
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;