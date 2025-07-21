import { useState } from "react";
import { Heart, Users, Clock, Gift, HandHeart, Utensils, Car, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const AiderPage = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    motivation: "",
    activities: [] as string[],
  });
  const { toast } = useToast();

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Candidature envoyée !",
      description: "Merci pour votre engagement. Nous vous contacterons bientôt.",
    });
    setVolunteerForm({
      name: "",
      email: "",
      phone: "",
      motivation: "",
      activities: [],
    });
  };

  const handleActivityChange = (activity: string, checked: boolean) => {
    setVolunteerForm(prev => ({
      ...prev,
      activities: checked 
        ? [...prev.activities, activity]
        : prev.activities.filter(a => a !== activity)
    }));
  };

  const volunteerActivities = [
    { id: "distribution", label: "Distribution de repas", icon: Utensils },
    { id: "preparation", label: "Préparation des repas", icon: Heart },
    { id: "transport", label: "Transport et logistique", icon: Car },
    { id: "accompagnement", label: "Accompagnement social", icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Comment nous aider
          </h1>
          <p className="text-xl text-muted-foreground">
            Votre aide est précieuse ! Découvrez les différentes façons de contribuer à notre mission
          </p>
        </div>

        {/* Ways to Help */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Devenir bénévole</CardTitle>
              <CardDescription>
                Rejoignez nos équipes et participez directement aux distributions et à l'accompagnement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Quelques heures par semaine suffisent</li>
                <li>• Formation assurée par l'association</li>
                <li>• Ambiance conviviale et solidaire</li>
                <li>• Horaires flexibles selon vos disponibilités</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Faire un don</CardTitle>
              <CardDescription>
                Soutenez financièrement nos actions pour acheter des denrées et du matériel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• 10€ = 5 repas chauds</li>
                <li>• 25€ = 1 semaine de distribution</li>
                <li>• 50€ = Équipement pour un point de distribution</li>
                <li>• Reçu fiscal pour réduction d'impôts</li>
              </ul>
              <Button variant="hero" className="w-full">
                Faire un don en ligne
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Volunteer Registration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Devenir bénévole
            </h2>
            
            <Card className="shadow-warm mb-8">
              <CardHeader>
                <CardTitle>Nos activités bénévoles</CardTitle>
                <CardDescription>
                  Choisissez les activités qui vous intéressent le plus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {volunteerActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg bg-accent">
                      <activity.icon className="w-6 h-6 text-primary" />
                      <span className="text-accent-foreground font-medium">
                        {activity.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Engagement et horaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Engagement minimum</h4>
                    <p className="text-muted-foreground">
                      2-3 heures par semaine, selon vos disponibilités
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Horaires flexibles</h4>
                    <p className="text-muted-foreground">
                      Matins, après-midis ou soirées. Nous nous adaptons à votre emploi du temps
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Formation</h4>
                    <p className="text-muted-foreground">
                      Formation d'accueil et accompagnement par un bénévole expérimenté
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Volunteer Form */}
          <div>
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <HandHeart className="w-6 h-6 text-primary" />
                  Candidature bénévole
                </CardTitle>
                <CardDescription>
                  Remplissez ce formulaire pour rejoindre nos équipes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="volunteer-name">Nom complet</Label>
                    <Input
                      id="volunteer-name"
                      type="text"
                      required
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Votre nom et prénom"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="volunteer-email">Email</Label>
                    <Input
                      id="volunteer-email"
                      type="email"
                      required
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="votre@email.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="volunteer-phone">Téléphone</Label>
                    <Input
                      id="volunteer-phone"
                      type="tel"
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="06 12 34 56 78"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium">Activités qui vous intéressent</Label>
                    <div className="mt-3 space-y-3">
                      {volunteerActivities.map((activity) => (
                        <div key={activity.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={activity.id}
                            checked={volunteerForm.activities.includes(activity.id)}
                            onCheckedChange={(checked) => 
                              handleActivityChange(activity.id, checked as boolean)
                            }
                          />
                          <Label htmlFor={activity.id} className="text-sm font-normal">
                            {activity.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="motivation">Votre motivation</Label>
                    <Textarea
                      id="motivation"
                      value={volunteerForm.motivation}
                      onChange={(e) => setVolunteerForm(prev => ({ ...prev, motivation: e.target.value }))}
                      placeholder="Parlez-nous de vos motivations pour devenir bénévole..."
                      className="mt-2 min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Heart className="w-5 h-5" />
                    Envoyer ma candidature
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Other Ways to Help */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Autres façons d'aider
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft text-center">
              <CardContent className="p-8">
                <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Dons en nature</h3>
                <p className="text-muted-foreground mb-6">
                  Vêtements chauds, produits d'hygiène, denrées non périssables
                </p>
                <Button variant="outline">En savoir plus</Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Parrainage</h3>
                <p className="text-muted-foreground mb-6">
                  Parrainez une distribution ou un événement spécial
                </p>
                <Button variant="outline">Nous contacter</Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="p-8">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Sensibilisation</h3>
                <p className="text-muted-foreground mb-6">
                  Partagez notre cause sur les réseaux sociaux
                </p>
                <Button variant="outline">Partager</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiderPage;
