import React from 'react';
import { Download, FileArchive, FileText, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const DownloadPage = () => {
  const downloadFiles = [
    {
      name: 'Wedding Website (TAR.GZ)',
      description: 'For Mac & Linux users',
      size: '36 KB',
      file: '/downloads/wedding-website-DOWNLOAD.tar.gz',
      icon: <FileArchive className="h-8 w-8 text-blue-600" />
    },
    {
      name: 'Wedding Website (ZIP)',
      description: 'For Windows users',
      size: '67 KB',
      file: '/downloads/wedding-website-DOWNLOAD.zip',
      icon: <FileArchive className="h-8 w-8 text-green-600" />
    },
    {
      name: 'Quick Start Guide',
      description: 'Fast reference instructions',
      size: '9 KB',
      file: '/downloads/QUICK_START.txt',
      icon: <FileText className="h-8 w-8 text-purple-600" />
    },
    {
      name: 'Download Instructions',
      description: 'How to use the packages',
      size: '6 KB',
      file: '/downloads/DOWNLOAD_INSTRUCTIONS.txt',
      icon: <FileText className="h-8 w-8 text-orange-600" />
    },
    {
      name: 'Complete File List',
      description: 'All files included',
      size: '6 KB',
      file: '/downloads/FILE_LIST.txt',
      icon: <FileText className="h-8 w-8 text-pink-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf8f5] to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif italic text-[#B8956A] mb-6">
            Download Your Wedding Website
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Complete package with all source code, components, and documentation
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 border-[#B8956A]/20">
            <CardContent className="pt-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Complete Source Code</h3>
              <p className="text-sm text-gray-600">All React components & files</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-[#B8956A]/20">
            <CardContent className="pt-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Ready to Customize</h3>
              <p className="text-sm text-gray-600">Easy-to-edit mock data file</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-[#B8956A]/20">
            <CardContent className="pt-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Full Documentation</h3>
              <p className="text-sm text-gray-600">Setup guides & instructions</p>
            </CardContent>
          </Card>
        </div>

        {/* Download Cards */}
        <div className="space-y-6 mb-12">
          {downloadFiles.map((file, index) => (
            <Card key={index} className="border-2 border-[#B8956A]/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{file.icon}</div>
                    <div>
                      <CardTitle className="text-2xl text-gray-800 mb-2">{file.name}</CardTitle>
                      <CardDescription className="text-base">{file.description}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-3">Size: {file.size}</div>
                    <Button
                      asChild
                      className="bg-[#B8956A] hover:bg-[#A07D57] text-white"
                    >
                      <a href={file.file} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Instructions */}
        <Card className="bg-blue-50 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">📋 After Download</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Extract the Package</p>
                  <p className="text-sm text-gray-600">Unzip or extract the downloaded file</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Install Dependencies</p>
                  <p className="text-sm text-gray-600 font-mono">yarn install</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Customize Your Data</p>
                  <p className="text-sm text-gray-600">Edit <span className="font-mono">src/data/mock.js</span> with your wedding details</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  4
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Start the Website</p>
                  <p className="text-sm text-gray-600 font-mono">yarn start</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-[#B8956A] text-[#B8956A] hover:bg-[#B8956A] hover:text-white"
          >
            <a href="/">← Back to Wedding Website</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
