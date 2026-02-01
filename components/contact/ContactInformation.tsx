import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const ContactInformation = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        Contact Information
      </h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Reach out to us through any of the following channels. We're available
        24/7 to assist you with your insurance needs.
      </p>

      <div className="space-y-6">
        <Card className="border-l-4 border-l-blue-600 shadow-sm">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-gray-700 font-semibold text-lg">
              We're here to help — Contact us anytime
            </h2>

            {/* Phone Section */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">
                  Call Us (Toll Free)
                </span>
                <a
                  href="tel:+919718181605"
                  className="text-blue-600 font-semibold text-xl hover:text-blue-700"
                >
                  9718181605
                </a>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center gap-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Email Us</span>
                <a
                  href="mailto:rvinsurance07@gmail.com"
                  className="text-green-600 font-semibold text-lg hover:text-green-700"
                >
                  rvinsurance07@gmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-600 shadow-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">
                    Office Address
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    Sec -68A Gurgaon, <br /> Haryana 122101
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">
                    Business Hours
                  </h3>

                  <div className="text-gray-700 space-y-1">
                    <p>7 days : 9:00 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-green-600 font-medium mt-6 text-center">
              Emergency support available 24/7
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactInformation;
