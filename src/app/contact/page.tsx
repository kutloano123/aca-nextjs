export default function ContactPage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className="mb-2">
        We’d love to hear from you! Reach out to us via the following channels:
      </p>

      <ul className="space-y-2 text-gray-700">
        <li>
          <strong>WhatsApp:</strong> <a href="https://wa.me/26663250668" className="text-blue-600 hover:underline">+266 6325 0668</a>
        </li>
        <li>
          <strong>Call:</strong> 
          <a href="tel:+26651601010" className="text-blue-600 hover:underline"> +266 5160 1010</a> / 
          <a href="tel:+26657642622" className="text-blue-600 hover:underline"> +266 5764 2622</a>
        </li>
        <li>
          <strong>Email:</strong> <a href="bokangthoothe262@gmail.com" className="text-blue-600 hover:underline">bokangthoothe262@gmail.com</a>
        </li>
      </ul>

      <p className="mt-4 text-gray-600">
        We’re available Monday to Friday, 9:00 AM – 7:00 PM.
      </p>
    </div>
  );
}
