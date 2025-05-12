'use client'

import React from 'react'

interface CodeBlockProps {
  language?: string;
  fileName?: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language = 'php', fileName = 'example.php', code }) => {
  // Função para renderizar o código PHP com syntax highlighting
  const renderPhpCode = () => {
    // Dividir o código em linhas para processar
    const lines = code.split('\n');
    
    return lines.map((line: string, index: number) => {
      // Substituir trechos específicos por elementos com estilo
      let processedLine = line;
      
      // Processar cada parte da linha individualmente
      // Se for a tag PHP, renderiza diretamente
      if (line.includes('<?php')) {
        return (
          <div key={index}>
            <span className="text-blue-400">{'<?php'}</span>
          </div>
        );
      }
      
      // Comentários
      if (line.includes('//')) {
        const parts = line.split('//');
        return (
          <div key={index}>
            {parts[0]}
            <span className="text-gray-500">{'//' + parts[1]}</span>
          </div>
        );
      }
      
      // Namespaces e imports
      if (line.includes('use Illuminate')) {
        return (
          <div key={index}>
            <span className="text-purple-400">use</span>{' '}
            <span className="text-green-400">Illuminate\Support\Facades\Route</span>;
          </div>
        );
      }
      
      // Route::get
      if (line.includes('Route::get')) {
        return (
          <div key={index}>
            <span className="text-yellow-400">Route</span>
            <span className="text-gray-400">::</span>
            <span className="text-blue-400">get</span>
            {'('}
            <span className="text-orange-400">{'\'/\''}</span>
            {', '}
            <span className="text-purple-400">function</span>
            {' () {'}
          </div>
        );
      }
      
      // return response()->json
      if (line.includes('return response')) {
        return (
          <div key={index} className="ml-4">
            <span className="text-purple-400">return</span>{' '}
            <span className="text-blue-400">response</span>
            {'()'}
            <span className="text-gray-400">{'->'}</span>
            <span className="text-blue-400">json</span>
            {'(['}
          </div>
        );
      }
      
      // Array entries
      if (line.includes('=>')) {
        const parts = line.split('=>');
        const key = parts[0].trim();
        const value = parts[1].trim();
        
        return (
          <div key={index} className="ml-8">
            <span className="text-orange-400">{key}</span>{' '}
            <span className="text-gray-400">{'=>'}</span>{' '}
            {key.includes('version') ? (
              <>
                <span className="text-blue-400">app</span>
                {'('}
                {')'}
                <span className="text-gray-400">{'->'}</span>
                <span className="text-blue-400">version</span>
                {'()'}
              </>
            ) : (
              <span className="text-green-400">{value}</span>
            )}
            {','}
          </div>
        );
      }
      
      // Closing brackets
      if (line.includes(']);')) {
        return <div key={index} className="ml-4">{']);'}</div>;
      }
      
      if (line.includes('});')) {
        return <div key={index}>{'});'}</div>;
      }
      
      // Return regular line as a fallback
      return <div key={index}>{processedLine}</div>;
    });
  };

  return (
    <div className="w-full h-full bg-gray-900 rounded-xl shadow-lg overflow-hidden">
      <div className="flex items-center bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-white text-sm opacity-70">{fileName}</div>
      </div>

      <div className="p-6 text-left h-full overflow-auto">
        <pre className="text-sm md:text-base font-mono text-gray-300 whitespace-pre-wrap">
          {renderPhpCode()}
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
