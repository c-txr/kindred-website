// 1. Définir l'URL du Webhook Make
const webhookUrl = "https://hook.eu1.make.com/sdr43u9gsth5v1irluh23gsvtc4ci8mx";

// 2. Cibler le formulaire HTML (vérifie que l'ID correspond à ton HTML)
const form = document.getElementById("monFormulaire");

// 3. Écouter la soumission du formulaire
form.addEventListener("submit", function(event) {
  
  // Empêche le rechargement de la page par défaut
  event.preventDefault();

  // 4. Récupérer les valeurs des champs HTML (vérifie les ID de tes inputs)
  const payload = {
    email: document.getElementById("email").value
  };

  // 5. Envoyer la donnée vers Make
  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (response.ok) {
      console.log("Succès : Les données sont parties sur Make !");
      // Action optionnelle : vider le formulaire après succès
      form.reset();
      // Action optionnelle : afficher un message à l'utilisateur
      alert("Merci, vos informations ont bien été envoyées !");
    } else {
      console.error("Erreur du serveur Make (ex: URL incorrecte)");
    }
  })
  .catch(error => console.error("Erreur de connexion réseau :", error));
});