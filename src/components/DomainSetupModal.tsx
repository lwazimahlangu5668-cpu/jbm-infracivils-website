import React, { useState } from 'react';
import { 
  Globe, 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  AlertCircle, 
  Server, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';

interface DomainSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DomainSetupModal: React.FC<DomainSetupModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const appUrl = 'https://ais-pre-prlde3pnxhqsxrshniow7l-268789137643.europe-west2.run.app';
  const targetHost = 'ais-pre-prlde3pnxhqsxrshniow7l-268789137643.europe-west2.run.app';
  const targetDomain = 'jbminfracivils.co.za';

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const dnsRecords = [
    {
      type: 'CNAME',
      host: 'www',
      value: targetHost,
      description: 'Points www.jbminfracivils.co.za to your Google Cloud Run hosting',
    },
    {
      type: 'CNAME',
      host: '@ (Root)',
      value: targetHost,
      description: 'Points jbminfracivils.co.za root to your live applet (or use Cloudflare CNAME flattening)',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#15202E] border border-[#2A3A4E] rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#2A3A4E] flex items-center justify-between bg-[#111A24]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#FF5722]/10 border border-[#FF5722]/30 text-[#FF5722]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Connect Custom Domain: {targetDomain}
              </h3>
              <p className="text-xs text-[#8A99AD]">
                Step-by-step setup guide and DNS connection records
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-[#1E2A38] border border-[#2A3A4E] rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300">
          
          {/* Important Notice */}
          <div className="p-4 rounded-lg bg-[#111A24] border border-[#2A3A4E] space-y-2">
            <div className="flex items-center gap-2 font-bold text-white text-xs">
              <ShieldCheck className="w-4 h-4 text-[#FF5722]" />
              <span>Why you must register the domain in your own name</span>
            </div>
            <p className="text-xs text-[#8A99AD] leading-relaxed">
              In South Africa, the official domain registry (ZACR) requires domains like <span className="text-white font-mono font-semibold">{targetDomain}</span> to be legally registered under your personal ID or company name (<strong className="text-slate-200">JBM Infracivils</strong>) with your email. An AI cannot legally hold domain ownership or enter payment credentials on your behalf.
            </p>
          </div>

          {/* Step 1: Claim domain */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-[#FF5722] text-white flex items-center justify-center text-[11px] font-mono">1</span>
              <span>Register "{targetDomain}" (~R79 - R99 / year)</span>
            </div>
            <p className="text-xs text-slate-400">
              Click below to search and register your domain in under 3 minutes on any licensed South African domain registrar:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <a
                href={`https://www.domains.co.za/domain-registration?domain=${encodeURIComponent(targetDomain)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#1E2A38] hover:bg-[#28384B] border border-[#2A3A4E] text-white font-semibold text-xs transition-colors group"
              >
                <span>Register on Domains.co.za</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FF5722] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://www.afrihost.com/domains/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#1E2A38] hover:bg-[#28384B] border border-[#2A3A4E] text-white font-semibold text-xs transition-colors group"
              >
                <span>Register on Afrihost</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FF5722] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Step 2: DNS Records to copy */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-[#FF5722] text-white flex items-center justify-center text-[11px] font-mono">2</span>
              <span>Add these DNS Records in your Registrar DNS Panel</span>
            </div>
            <p className="text-xs text-slate-400">
              Once registered, open the "DNS Management" tab on your domain provider and paste the following record:
            </p>

            <div className="space-y-2">
              {dnsRecords.map((rec, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#111A24] border border-[#2A3A4E] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold text-[#FF5722] bg-[#1E2A38] px-1.5 py-0.5 rounded border border-[#2A3A4E]">
                        {rec.type}
                      </span>
                      <span className="font-mono text-xs text-white font-semibold">
                        Host: {rec.host}
                      </span>
                    </div>

                    <button
                      onClick={() => copyToClipboard(rec.value, `dns-${i}`)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:text-white bg-[#1E2A38] border border-[#2A3A4E] rounded transition-colors"
                    >
                      {copiedKey === `dns-${i}` ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Value</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="font-mono text-[11px] text-slate-300 bg-[#0F1722] px-2 py-1.5 rounded border border-[#2A3A4E] break-all">
                    {rec.value}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {rec.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Live URL ready to share immediately */}
          <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-800/60 space-y-2">
            <div className="text-xs font-bold text-emerald-300 flex items-center justify-between">
              <span>Your Website is Already Live Online Right Now!</span>
              <button
                onClick={() => copyToClipboard(appUrl, 'live-url')}
                className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:underline"
              >
                {copiedKey === 'live-url' ? 'Copied Link!' : 'Copy Link'}
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              While you register your custom domain, you can already send your live link to clients, architects, and municipal tenders:
            </p>
            <div className="font-mono text-[11px] text-emerald-200 bg-[#0F1722]/80 px-2.5 py-2 rounded border border-emerald-700/50 break-all select-all flex items-center justify-between">
              <span>{appUrl}</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#111A24] border-t border-[#2A3A4E] flex items-center justify-between">
          <a
            href="https://wa.me/27815296428?text=Hello,%20I%20am%20ready%20to%20connect%20the%20custom%20domain%20for%20JBM%20Infracivils."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8A99AD] hover:text-white flex items-center gap-1.5"
          >
            <span>Need assistance? Send to WhatsApp</span>
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-white bg-[#FF5722] hover:bg-[#E64A19] rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
