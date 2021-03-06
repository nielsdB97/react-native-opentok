require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-opentok"
  s.version      = package["version"]
  s.summary      = "An OpenTok SDK for react-native"
  s.authors      = {
    'Mike Grabowski' => 'mike@callstack.io',
    'Mike Chudziak' => 'mike.chudziak@callstack.io',
  }

  s.homepage     = "https://github.com/nielsdB97/react-native-opentok"

  s.license      = "MIT"
  s.platform     = :ios, "8.0"

  s.source       = { :git => "https://github.com/nielsdB97/react-native-opentok.git", :tag => "#{s.version}" }

  s.source_files = "*.{h,m}"
  s.dependency     "OpenTok"
end
